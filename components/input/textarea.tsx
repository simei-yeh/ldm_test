import React from 'react';

interface Props {
  name: string,
  callback: React.ChangeEventHandler<HTMLTextAreaElement>,
  value: string,
}

const Textarea: React.FunctionComponent<Props> = ({ name, callback }) => {
  return (
    <textarea rows={4} onChange={callback} name={name}>
    </textarea>
  )
}

export default Textarea;