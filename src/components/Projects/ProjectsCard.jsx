import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';

export default function AccordionUsage({ projects }) {
  return (
    <div>
      {projects.map((data, index) => {
        return (
<Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography component="span"><strong style={{fontSize: "25px"}}>{data.title} - {data.Role}</strong></Typography> 
          
        </AccordionSummary>
        <AccordionDetails>
        <Typography component="span"><strong style={{fontSize: "20px"}}> Tenure : {data.duration}</strong></Typography>
        <div>
          <img src={data.image} alt={data.title} />
        </div>
         <div style={{marginTop: '15px'}}>{data.text}</div>
        </AccordionDetails>
      </Accordion>  
        )
      })
    }  
    </div>
  );
}
