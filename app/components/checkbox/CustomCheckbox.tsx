import React, { ReactElement } from 'react';
import { useCheckbox, Chip, VisuallyHidden, tv } from '@nextui-org/react';
import CheckIcon from '@/app/components/checkbox/CheckIcon';

const checkbox = tv({
  slots: {
    base: 'group/box border-default bg-transparent hover:bg-default-200',
    content: 'text-gray-400 hover:text-black',
  },
  variants: {
    isSelected: {
      true: {
        base: 'border-primary bg-primary hover:bg-primary-500 hover:border-primary-500',
        content: 'text-primary-foreground pl-1',
      },
    },
    isFocusVisible: {
      true: {
        base: 'outline-none ring-2 ring-focus ring-offset-2 ring-offset-background',
      },
    },
  },
});

export default function CustomCheckbox(props: any): ReactElement {
  const {
    children,
    isSelected,
    isFocusVisible,
    getBaseProps,
    getLabelProps,
    getInputProps,
  } = useCheckbox({
    ...props,
  });
  const styles = checkbox({ isSelected, isFocusVisible });
  return (
    <label {...getBaseProps()}>
      <VisuallyHidden>
        <input {...getInputProps()} />
      </VisuallyHidden>
      <Chip
        classNames={{
          base: styles.base(),
          content: styles.content(),
        }}
        color="primary"
        startContent={
          isSelected ? (
            <CheckIcon className="ml-1 text-white group-hover/box:text-black" />
          ) : null
        }
        variant="faded"
        {...getLabelProps()}
      >
        {children ? children : isSelected ? 'Enabled' : 'Disabled'}
      </Chip>
    </label>
  );
}