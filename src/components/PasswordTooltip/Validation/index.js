import React from "react";

import { ValidationIcon } from "../ValidationIcon";

function Validation({ children, icon, isValid }) {
  return (
    <div className="gn-password-tooltip-validation">
      <ValidationIcon icon={icon} isValid={isValid} />

      {children}
    </div>
  );
}

export { Validation };
