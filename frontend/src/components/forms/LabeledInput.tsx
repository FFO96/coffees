import classnames from 'classnames';
import React from 'react'

type Props = {
  label: string;
  children: JSX.Element;
  className?: string
}

export const LabeledInput = ({ label, children, className }: Props) => {
  return (
    <div className={classnames('flex flex-col', className)}>
      <label className='text-dark-100'>{label}</label>
      {children}
    </div>
  )
}