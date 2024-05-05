import Select, { ValueType } from 'react-select';
import makeAnimated from 'react-select/animated';
import { OrganizationQueries } from '~entities/organization';

const animatedComponents = makeAnimated();

type OrganizationSelectProps = {
  selectOrg: number | null;
  handleChange: (selectedOption: number | null) => void;
};

export function OrganizationSelect({
  selectOrg,
  handleChange,
}: OrganizationSelectProps) {
  
  const {
    data: organizationOptions,
    isLoading,
    isError,
  } = OrganizationQueries.useGetOrganization();


  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError || !organizationOptions || !organizationOptions.data) {
    return <div>Error fetching user data.</div>;
  }

  const options = organizationOptions.data.map((organization) => ({
    value: organization.id,
    label: organization.name,
  }));


  const handleSelectChange = (
    selectedOption: ValueType<{ value: number; label: string }>
  ) => {
    const selectedId: number | null = selectedOption
      ? (selectedOption as { value: number }).value
      : null;
    handleChange(selectedId);
  };

  return (
    <Select
      className="my-2 w-[450px]"
      isClearable
      isSearchable
      placeholder="Организации"
      components={animatedComponents}
      options={options}
      onChange={handleSelectChange}
      value={options.find((option) => option.value === selectOrg)}
    />
  );
}
