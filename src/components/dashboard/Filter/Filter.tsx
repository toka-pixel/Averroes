import { ChangeEvent } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { TaskStatus } from "@/shared/taskStatus.enum";
import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import { handleTaskStatus } from "@/store/Filter/filterSlice";
import { useAppDispatch, useAppSelector } from "@/hooks/storeIndex";

const Filter = () => {
  const dispatch = useAppDispatch();

  const { taskStatusFilter } = useAppSelector((state) => state.filter);

  const handleStatusChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    dispatch(handleTaskStatus({ status: value }));
  };

  return (
    <div>
      
      <Accordion expanded={true}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Task Status</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormGroup>
            {Object.keys(TaskStatus)?.map((status,index) => (
              <FormControlLabel
               key={index}
                control={
                  <Checkbox
                    checked={taskStatusFilter.includes(status)}
                    onChange={handleStatusChange}
                    value={status}
                    size="small"
                  />
                }
                label={status}
              />
            ))}
          </FormGroup>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default Filter;
