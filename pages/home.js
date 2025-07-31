import React from 'react';
import CrmLayout from './components/CrmLayout';
import { 
  Box, 
  Typography,
  Grid,
  Paper,
  Stack,
  Avatar,
  LinearProgress
} from '@mui/material';
import {
  ShoppingCart,
  People,
  AttachMoney,
  TrendingUp
} from '@mui/icons-material';

function Home() {
  // Stats data
  const stats = [
    { title: 'Total Orders', value: '1,245', icon: <ShoppingCart />, color: '#fd367b', progress: 75 },
    { title: 'Total Users', value: '524', icon: <People />, color: '#4CAF50', progress: 60 },
    { title: 'Revenue', value: '$12,345', icon: <AttachMoney />, color: '#FFC107', progress: 85 },
    { title: 'Growth', value: '+18.7%', icon: <TrendingUp />, color: '#2196F3', progress: 45 }
  ];

  return (
    <CrmLayout>
      <Box >
        {/* Header */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Dashboard
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Welcome back! Here's what's happening today.
          </Typography>
        </Box>

        {/* Stats Cards */}
        <Grid container spacing={3}>
          {stats.map((stat, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Paper sx={{ p: 3, borderRadius: 3 }}>
                <Stack direction="row" justifyContent="space-between" alignItems="center">
                  <Avatar sx={{ bgcolor: stat.color, width: 56, height: 56 }}>
                    {stat.icon}
                  </Avatar>
                  <Box>
                    <Typography variant="body2" color="text.secondary">
                      {stat.title}
                    </Typography>
                    <Typography variant="h5" fontWeight="bold">
                      {stat.value}
                    </Typography>
                  </Box>
                </Stack>
                <LinearProgress 
                  variant="determinate" 
                  value={stat.progress} 
                  sx={{ 
                    mt: 2,
                    height: 8,
                    borderRadius: 4,
                    backgroundColor: `${stat.color}20`,
                    '& .MuiLinearProgress-bar': {
                      backgroundColor: stat.color
                    }
                  }} 
                />
              </Paper>
            </Grid>
          ))}
        </Grid>

        {/* Add more dashboard components here */}
      </Box>
    </CrmLayout>
  );
}

export default Home;