// src/components/Hello.tsx

import * as React from 'react';

interface IProps {
  name: string;
  enthusiasmLevel?: number;
}

export const Hello: React.StatelessComponent<IProps> = (props: IProps) => {
  //let enthusiasmLevel = props.enthusiasmLevel;

  //if(enthusiasmLevel === undefined) enthusiasmLevel = 1;

  if (props.enthusiasmLevel as number <= 0 ) {
    throw new Error('You could be a little more enthusiastic. :D');
  }

  return (
    <div className="hello">
      <div className="greeting">
        Hello {props.name + getExclamationMarks(props.enthusiasmLevel as number)}
      </div>
    </div>
  );
}
Hello.defaultProps = {
  enthusiasmLevel: 1
}

export default Hello;

// helpers

function getExclamationMarks(numChars: number) {
  return Array(numChars + 1).join('!');
}