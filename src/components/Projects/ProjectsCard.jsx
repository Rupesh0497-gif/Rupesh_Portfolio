import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function AccordionUsage({ projects }) {
  return (
    <div style={{ width: '100%' }}>
      {projects.map((data, index) => {
        return (
          <Accordion key={index} style={{ marginBottom: '1rem' }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`panel${index}-content`}
              id={`panel${index}-header`}
            >
              <span style={{ fontSize: "1.25rem", fontWeight: "700", color: 'var(--text-primary)' }}>
                {data.title} <span style={{ color: 'var(--text-secondary)' }}>| {data.Role}</span>
              </span>
            </AccordionSummary>
            <AccordionDetails>
              <div style={{ fontSize: "1rem", fontWeight: "500", color: 'var(--accent-neon-blue)', marginBottom: '1rem' }}>
                Tenure: {data.duration}
              </div>
              <div style={{display: 'flex'}}>
              <div style={{ margin: '1rem', width: '300px', borderRadius: '12px' }}>
                <img src={data.image} alt={data.title} style={{ width: '300px', height: '200px', objectFit: 'cover', borderRadius: '100px'}} />
              </div>
              <div style={{ marginTop: '10px', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                {data.text}
              </div>
              </div>
            </AccordionDetails>
          </Accordion>
        )
      })}
    </div>
  );
}
