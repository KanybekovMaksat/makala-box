import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import { categoryQueries } from '~entities/category';

const animatedComponents = makeAnimated();

type Category = {
  id: number;
  name: string;
  children: Category[];
};

type ValueType<T> = T | T[] | null | undefined;

type CategorySelectProps = {
  selectCategory: Array<number>;
  handleChange: (selectedOptions: Array<number>) => void;
};

export function CategorySelect({
  selectCategory,
  handleChange,
}: CategorySelectProps) {
  const {
    data: organizationOptions,
    isLoading,
    isError,
  } = categoryQueries.useGetCategoryQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching user data.</div>;
  }

  const transformData = (organizations: Category[]) => {
    const groupedOptions: { label: string; options: { value: number; label: string }[] }[] = [];

    organizations.forEach((category) => {
      const categoryOptions = {
        label: category.name,
        options: [],
      };

      if (category.children && category.children.length > 0) {
        category.children.forEach((subcategory) => {
          categoryOptions.options.push({
            value: subcategory.id,
            label: subcategory.name,
          });
        });
      } else {
        categoryOptions.options.push({
          value: category.id,
          label: category.name,
        });
      }

      groupedOptions.push(categoryOptions);
    });

    return groupedOptions;
  };

  const options = transformData(organizationOptions.data);

  const handleSelectChange = (selectedOptions: ValueType<{ value: number; label: string }>) => {
    const selectedIds: number[] = (selectedOptions as { value: number; label: string }[])
      .map(option => option.value);
    handleChange(selectedIds);
  };

  return (
    <Select
      className="my-2 w-full"
      closeMenuOnSelect={false}
      isMulti
      isClearable
      isSearchable
      placeholder="Категории"
      components={animatedComponents}
      options={options}
      onChange={handleSelectChange}
      value={options.flatMap(category => category.options).filter(option => selectCategory.includes(option.value))}
    />
  );
}
