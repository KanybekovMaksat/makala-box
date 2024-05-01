import { Box, Button, Modal, Slider } from '@mui/material';
import Dropzone from 'react-dropzone';
import AvatarEditor from 'react-avatar-editor';
import React, { useRef, useState } from 'react';

const boxStyle = {
  width: '300px',
  height: '300px',
  display: 'flex',
  flexFlow: 'column',
  justifyContent: 'center',
  alignItems: 'center',
};
const modalStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

interface CropperModalProps {
  src: string | null;
  modalOpen: boolean;
  setModalOpen: (open: boolean) => void;
  setPreview: (preview: string | null) => void;
}

const CropperModal: React.FC<CropperModalProps> = ({
  src,
  modalOpen,
  setModalOpen,
  setPreview,
}) => {
  const [slideValue, setSlideValue] = useState<number>(10);
  const cropRef = useRef<HTMLImageElement | null>(null);

  const handleSave = async () => {
    if (cropRef.current) {
      const dataUrl = cropRef.current.getImage().toDataURL();
      const result = await fetch(dataUrl);
      const blob = await result.blob();
      setPreview(URL.createObjectURL(blob));
      localStorage.setItem('savedImage', URL.createObjectURL(blob));
      setModalOpen(false);
    }
  };

  return (
    <Modal sx={modalStyle} open={modalOpen}>
      <Box sx={boxStyle}>
        <AvatarEditor
          ref={cropRef}
          image={src || ''}
          border={20}
          style={{ width: '100%', height: '100%' }}
          color={[0, 0, 0, 0.72]}
          scale={slideValue / 10}
          rotate={0}
        />
        <Slider
          min={10}
          max={50}
          sx={{
            margin: '0 auto',
            width: '80%',
            color: 'cyan',
          }}
          size="medium"
          defaultValue={slideValue}
          value={slideValue}
          onChange={(e, value) => setSlideValue(value as number)}
        />
        <Box>
          <Button
            size="small"
            sx={{ marginRight: '10px', color: 'white', borderColor: 'white' }}
            variant="outlined"
            onClick={() => setModalOpen(false)}
          >
            cancel
          </Button>
          <Button
            sx={{ background: '#5596e6' }}
            size="small"
            variant="contained"
            onClick={handleSave}
          >
            Save
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export function CoverCropper() {
  const [preview, setPreview] = useState<string | null>(null);
  const [src, setSrc] = useState<string | null>(null);
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const handleDrop = (dropped) => {
    setSrc(dropped[0]);
    setModalOpen(true);
  };

  const handleSelectAnotherPhoto = () => {
    setSrc(null);
    setPreview(null);
    localStorage.setItem('savedImage', null);
  };
  const imageRef = localStorage.getItem('savedImage');

  return (
    <div className="w-full mt-2 flex gap-5">
      {imageRef === 'null' ? (
        <Dropzone
          onDrop={handleDrop}
          noKeyboard
          accept={{ 'image/jpeg': ['.jpeg', '.png', '.svg'] }}
        >
          {({ getRootProps, getInputProps, isDragActive }) => (
            <div
              {...getRootProps()}
              className={`w-full h-[230px] rounded border-2 border-dashed  ${
                isDragActive ? 'border-second-100' : 'border-pc-300'
              } relative flex justify-center items-center cursor-pointer`}
            >
              <input
                onChange={handleDrop}
                {...getInputProps()}
                placeholder="Drag  drop some files here, or click to select files"
              />
              <p
                className={`text-center ${
                  isDragActive ? 'text-second-100' : 'text-pc-300'
                } `}
              >
                {isDragActive ? '+' : ' Выберите или перетащите файл'}
              </p>
            </div>
          )}
        </Dropzone>
      ) : (
        <div>
          <img
            src={imageRef}
            alt=""
            className="min-w-[250px] max-w-[250px] min-h-[230px] max-h-[230px] object-cover rounded mb-2"
          />
          <Button variant="outlined" onClick={handleSelectAnotherPhoto}>
            Выбрать другое фото
          </Button>
        </div>
      )}

      <CropperModal
        modalOpen={modalOpen}
        src={src}
        setPreview={setPreview}
        setModalOpen={setModalOpen}
      />
    </div>
  );
}
