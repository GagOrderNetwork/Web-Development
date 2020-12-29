import "./styles.scss";
import React from "react";
import PropTypes from "prop-types";
import { Validation } from "./Validation";
import { classMap } from "../../util/classMap";

// Test patterns
const LOWER = /[a-z]/;
const UPPER = /[A-Z]/;
const NUMBER = /\d/;
const SYMBOL = /[^a-z0-9\s]/i;

function PasswordTooltip(props) {
  const { className, icon, isFocused, password } = props;

  const classes = classMap({
    "gn-password-tooltip": true,
    "gn-password-tooltip-hidden": !isFocused,
    [className]: true,
  });

  return (
    <div className={classes}>
      <div className="gn-password-tooltip-heading">Passwords must have...</div>

      <Validation icon={icon} isValid={password.length >= 8}>
        <span className="gn-password-tooltip-emphasis">8</span> characters
        minimum
      </Validation>

      <Validation icon={icon} isValid={LOWER.test(password)}>
        One <span className="gn-password-tooltip-emphasis">lowercase</span>{" "}
        character
      </Validation>

      <Validation icon={icon} isValid={UPPER.test(password)}>
        One <span className="gn-password-tooltip-emphasis">uppercase</span>{" "}
        character
      </Validation>

      <Validation icon={icon} isValid={NUMBER.test(password)}>
        One <span className="gn-password-tooltip-emphasis">number</span>
      </Validation>

      <Validation icon={icon} isValid={SYMBOL.test(password)}>
        One <span className="gn-password-tooltip-emphasis">symbol</span>{" "}
        (!@#$%^&;*)
      </Validation>

      <div className="gn-password-tooltip-tail" />
    </div>
  );
}

PasswordTooltip.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.func.isRequired,
  isFocused: PropTypes.bool.isRequired,
  password: PropTypes.string,
};

PasswordTooltip.defaultProps = {
  className: "",
  password: "",
};

export { PasswordTooltip };
