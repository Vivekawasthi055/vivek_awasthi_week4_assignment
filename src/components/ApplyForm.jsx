import { Button, TextField } from "@mui/material";
import PropTypes from "prop-types";

const ApplyForm = ({ setApplied }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    setApplied(true);
  };

  return (
    <form className="apply-form" onSubmit={handleSubmit}>
      <TextField className="text-area" label="Full Name" required fullWidth />
      <TextField
        className="text-area"
        label="Email"
        type="email"
        required
        fullWidth
      />
      <TextField
        className="text-area"
        label="Cover Letter"
        multiline
        rows={4}
        required
        fullWidth
      />
      <Button className="submit-btn" type="submit" variant="contained">
        Submit Application
      </Button>
    </form>
  );
};

ApplyForm.propTypes = {
  setApplied: PropTypes.func.isRequired,
};

export default ApplyForm;
