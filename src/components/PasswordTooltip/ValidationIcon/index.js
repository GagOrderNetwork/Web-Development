import React from "react";
import Close from "@material-ui/icons/Close";
import Check from "@material-ui/icons/Check";

import { If } from "../../If";

const ValidationIcon = ({ isValid }) => {
  return (
    <React.Fragment>
      <If test={isValid}>
        <Check />
      </If>

      <If test={!isValid}>
        <Close />
      </If>
    </React.Fragment>
  );
};

export { ValidationIcon };
