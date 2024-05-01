import Select, { ValueType } from 'react-select';
import makeAnimated from 'react-select/animated';
import { categoryQueries } from '~entities/category';

const animatedComponents = makeAnimated();

type CategorySelectProps = {
  selectCategory: Array<number>;
  handleChange: (selectedOptions: Array<number>) => void;
};

export function CategorySelect({
  selectCategory,
  handleChange,
}: CategorySelectProps) {

  const {
    data: categoryOptions,
    isLoading,
    isError,
  } = categoryQueries.useGetCategoryQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching user data.</div>;
  }

  const options = categoryOptions.data.map((category) => ({
    value: category.id,
    label: category.name,
  }));

  const handleSelectChange = (
    selectedOptions: ValueType<{ value: number; label: string }>
  ) => {
    const selectedIds: Array<number> = Array.isArray(selectedOptions)
      ? selectedOptions.map((option) => option.value)
      : [];
    handleChange(selectedIds);
  };

  return (
    <Select
      className="my-2 w-[600px]"
      closeMenuOnSelect={false}
      isMulti
      isClearable
      isSearchable
      placeholder="Категории"
      components={animatedComponents}
      options={options}
      onChange={handleSelectChange}
      value={options.filter((option) => selectCategory.includes(option.value))}
    />
  );
}
