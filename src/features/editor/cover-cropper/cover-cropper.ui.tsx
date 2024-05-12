import { Box, Button, Modal, Slider } from '@mui/material';
import Dropzone from 'react-dropzone';
import AvatarEditor from 'react-avatar-editor';
import React, { useRef, useState } from 'react';

const boxStyle = {
  width: '500px',
  height: '370px',
  display: 'flex',
  flexFlow: 'column',
  justifyContent: 'center',
  objectFit: 'cover',
  alignItems: 'center',
};
const modalStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  objectFit: 'cover',
};

interface CropperModalProps {
  src: string | null;
  modalOpen: boolean;
  setModalOpen: (open: boolean) => void;
}

const CropperModal: React.FC<CropperModalProps> = ({
  src,
  modalOpen,
  setModalOpen,
}) => {
  const [slideValue, setSlideValue] = useState<number>(10);
  const cropRef = useRef<AvatarEditor | null>(null);

  const handleSave = async () => {
    if (cropRef.current) {
      const dataUrl = cropRef.current.getImage().toDataURL();
      const result = await fetch(dataUrl);
      const blob = await result.blob();
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
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
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
          onChange={(_, value) => setSlideValue(value as number)}
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

interface CoverCropperProps {
  update: boolean;
  data?: string;
  setUpdate?: React.Dispatch<React.SetStateAction<boolean>>;
}

export function CoverCropper({ update, setUpdate, data }: CoverCropperProps) {
  const [src, setSrc] = useState<string | null>(null);
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const handleDrop = (dropped) => {
    setSrc(dropped[0]);
    setModalOpen(true);
  };

  const handleSelectAnotherPhoto = () => {
    setSrc(null);
    localStorage.setItem('savedImage', '');
  };
  const imageRef = localStorage.getItem('savedImage');

  if (update) {
    return (
      <div>
        <div className="">
          <img
            src={data}
            alt=""
            className="min-w-[94%] max-w-[100%] min-h-[400px] max-h-[400px] object-cover rounded "
          />
          <p>Примерное отображения обложки </p>
          <img
            src={data}
            alt=""
            className="min-w-[350px] max-w-[350px] min-h-[270px] max-h-[270px] object-cover rounded mt-3"
          />
          <p>Примерное отображения обложки на маленьких экранах</p>
        </div>
        <Button
          variant="outlined"
          className="my-3"
          onClick={() => setUpdate(false)}
        >
          Выбрать другое фото
        </Button>
      </div>
    );
  }

  return (
    <div className="w-full mt-2 flex gap-5">
      {!imageRef || imageRef.length === 0 ? (
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
          <div className="">
            <img
              src={imageRef}
              alt=""
              className="min-w-[700px] max-w-[700px] min-h-[400px] max-h-[400px] object-cover rounded "
            />
            <p>Примерное отображения обложки на больших экранах</p>
          </div>
          <Button
            variant="outlined"
            className="my-3"
            onClick={handleSelectAnotherPhoto}
          >
            Выбрать другое фото
          </Button>
        </div>
      )}

      <CropperModal
        modalOpen={modalOpen}
        src={src}
        setModalOpen={setModalOpen}
      />
    </div>
  );
}
