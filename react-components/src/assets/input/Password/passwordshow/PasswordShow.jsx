import React, { useState } from "react";
import Password from "../PasswordInput.jsx";
import Button from "../../../button/Button.jsx";
import "./PasswordShow.css";

export default function PasswordShow() {
  const [password, setPassword] = useState(""); // The current value of the password field
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  /**
   * Toggles the visibility of the password field
   */
  const [showPassword, setShowPassword] = useState(false);

  /**
   * Handles the toggle button click event
   */
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="passwordshow">
      <Password
        classContainer="passwordshow-content"
        classPassword="passwordshow-input"
        typePassword={
          showPassword ? "text" : "password" // toggle between text and password types
        }
        idPassword="password"
        placeholderPassword="Password"
        valuePassword={password}
        onChangePassword={handlePasswordChange}
        classSpan="passwordshow-span"
        childrenPassword={
          <Button
            typeButton="button"
            classButton="passwordshow-toggle"
            onClickButton={togglePasswordVisibility}
            childrenButton={showPassword ? "Hide Password" : "Show Password"}
          />
        }
      />

      <Button
        typeButton="submit"
        classButton="passwordshow-submit"
        onClickButton={() => console.log(`Password: ${password}`)}
        childrenButton="Submit"
      />
    </div>
  );
}


