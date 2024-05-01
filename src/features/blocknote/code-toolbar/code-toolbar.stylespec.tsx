import { createReactStyleSpec } from "@blocknote/react";
 
export const codeStyleSpec = createReactStyleSpec(
  {
    type: "code",
    propSchema: "string",
  },
  {
    render: (props) => (
      <span style={{background:props.value}} className="code-toolbar" ref={props.contentRef} />
    ),
  }
);
 