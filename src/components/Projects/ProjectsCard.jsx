import * as React from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Grid,
  Chip,
  Box
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function ProjectsCard({ projects }) {
  return (
    <Box sx={{ mt: 4 }}>
      {projects.map((data, index) => (
        <Accordion key={index} elevation={2} sx={{ borderRadius: 2 }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${index}-content`}
            id={`panel${index}-header`}
          >
            <Box>
              <Typography variant="h6" fontWeight="bold">
                {data.title}
              </Typography>
              <Typography variant="subtitle2" color="text.secondary">
                {data.Role} • {data.duration}
              </Typography>
            </Box>
          </AccordionSummary>

          <AccordionDetails>
            <Grid container spacing={3}>
              <Grid item xs={12} md={4}>
                <Box
                  component="img"
                  src={data.image}
                  alt={data.title}
                  sx={{ width: '100%', borderRadius: 2 }}
                />
              </Grid>

              <Grid item xs={12} md={8}>
                <Typography variant="body1" sx={{ mb: 2 }}>
                  {data.text}
                </Typography>

                {/* Optional: Tech stack tags */}
                {data.skills && (
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {data.skills.map((skill, idx) => (
                      <Chip key={idx} label={skill} color="primary" variant="outlined" />
                    ))}
                  </Box>
                )}
              </Grid>
            </Grid>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
}
