import React from 'react';
import { Box, Card, CardContent, Typography, Grid, Divider } from '@mui/material';
import { Retroboard } from '../types/retroboard';

interface RenderedRetroboardProps {
  retroboard: Retroboard;
}

const RenderedRetroboard: React.FC<RenderedRetroboardProps> = ({ retroboard }) => {
  return (
    <Box sx={{ flexGrow: 1, padding: 3 }}>
      <Grid container spacing={3}>
        {retroboard.users.map((user, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ backgroundColor: '#f7f9fc', boxShadow: 2, borderRadius: 2 }}>
              <CardContent>
                <Typography variant="h5" component="div" sx={{ fontWeight: 'bold' }} gutterBottom>
                  {user.name}
                </Typography>
                
                <Divider sx={{ marginY: 2 }} />

                <Box mb={3}>
                  <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
                    What Went Well
                  </Typography>
                  <Box sx={{ marginLeft: 2, marginTop: 1 }}>
                    {user.whatWentWell.map((item, idx) => (
                      <Typography variant="body1" key={idx} sx={{ display: 'flex', alignItems: 'center' }}>
                        • {item}
                      </Typography>
                    ))}
                  </Box>
                </Box>
                
                <Divider sx={{ marginY: 2 }} />

                <Box mb={3}>
                  <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
                    What Went Wrong
                  </Typography>
                  <Box sx={{ marginLeft: 2, marginTop: 1 }}>
                    {user.whatWentWrong.map((item, idx) => (
                      <Typography variant="body1" key={idx} sx={{ display: 'flex', alignItems: 'center' }}>
                        • {item}
                      </Typography>
                    ))}
                  </Box>
                </Box>

                <Divider sx={{ marginY: 2 }} />

                <Box mb={3}>
                  <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
                    What To Improve
                  </Typography>
                  <Box sx={{ marginLeft: 2, marginTop: 1 }}>
                    {user.whatToImprove.map((item, idx) => (
                      <Typography variant="body1" key={idx} sx={{ display: 'flex', alignItems: 'center' }}>
                        • {item}
                      </Typography>
                    ))}
                  </Box>
                </Box>

                <Divider sx={{ marginY: 2 }} />

                <Box mb={3}>
                  <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
                    Action Items
                  </Typography>
                  <Box sx={{ marginLeft: 2, marginTop: 1 }}>
                    {user.actionItems.map((item, idx) => (
                      <Typography variant="body1" key={idx} sx={{ display: 'flex', alignItems: 'center' }}>
                        • {item}
                      </Typography>
                    ))}
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default RenderedRetroboard;
