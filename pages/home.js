import React, { useState } from 'react';
import CrmLayout from './components/CrmLayout';
import {
  Box,
  Typography,
  Grid,
  Paper,
  Stack,
  Avatar,
  LinearProgress,
  Select,
  MenuItem, Button, Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow, 
    Tabs,
  Tab,
} from '@mui/material';
import {
  PlayCircle,
  WhereToVote,
  Schedule,
  Cancel,
  CheckCircle,
} from '@mui/icons-material';
import DirectionsBike from '@mui/icons-material/DirectionsBike';
import VerifiedUser from '@mui/icons-material/VerifiedUser';
import GppMaybe from '@mui/icons-material/GppMaybe';
import DirectionsCar from '@mui/icons-material/DirectionsCar';
import AttachMoney from '@mui/icons-material/AttachMoney';
import MoneyOff from '@mui/icons-material/MoneyOff';
import CreditCard from '@mui/icons-material/CreditCard';
import RequestQuote from '@mui/icons-material/RequestQuote';
import { Pie, Bar, Line } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, Title,PointElement,LineElement } from 'chart.js';

// Register ChartJS components
ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Title, Tooltip, Legend,
  PointElement,
  LineElement);
function Home() {
  const [age, setAge] = useState(10);
  // Add this state and data in your component
const averageRevenueData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
  datasets: [
    {
      label: 'Average Revenue per Ride',
      data: [120, 190, 150, 220, 180, 250, 210],
      borderColor: '#fd367b',
      backgroundColor: 'rgba(253, 54, 123, 0.1)',
      tension: 0.4,
      fill: true
    },
    {
      label: 'Average Revenue per Parcel',
      data: [80, 120, 100, 150, 130, 180, 160],
      borderColor: '#36A2EB',
      backgroundColor: 'rgba(54, 162, 235, 0.1)',
      tension: 0.4,
      fill: true
    }
  ]
};

  // Driver data
const topDrivers = [
  {
    name: "Daniel Miller",
    email: "driver@example.com",
    rides: 12,
    rating: 5.0,
    earnings: "$941.00"
  },
  {
    name: "Mike Brown",
    email: "mikebrown.driver@example.com",
    rides: 3,
    rating: 4.0,
    earnings: "$0.00"
  },
  {
    name: "Thomas Rodriguez",
    email: "thomas.driver@example.com",
    rides: 3,
    rating: 0.0,
    earnings: "$0.00"
  },
  {
    name: "Robert King",
    email: "robert.driver@example.com",
    rides: 2,
    rating: 5.0,
    earnings: "$0.00"
  },
  {
    name: "Brian Clark",
    email: "brian.driver@example.com",
    rides: 2,
    rating: 0.0,
    earnings: "$0.00"
  }
];
  // Stats data
  // Add this to your component
  const serviceData = {
    labels: ['Cab', 'Parcel', 'Freight'],
    datasets: [
      {
        label: 'Completed',
        data: [1200, 800, 600], // Replace with your actual data
        backgroundColor: '#fd367b',
      },
      {
        label: 'In Progress',
        data: [300, 400, 200], // Replace with your actual data
        backgroundColor: '#36A2EB',
      },
      {
        label: 'Cancelled',
        data: [100, 50, 75], // Replace with your actual data
        backgroundColor: '#FFCE56',
      }
    ]
  };
  const stats = [
    {
      title: 'Total Riders',
      persentage: '18000.7%',
      value: '1,245',
      icon: <DirectionsBike />,  // More appropriate for riders
    },
    {
      title: 'Total Verified Drivers',
      persentage: '18000.7%',
      value: '524',
      icon: <VerifiedUser />,  // Shows verified status
    },
    {
      title: 'Total Unverified Drivers',
      persentage: '18000.7%',
      value: '721',  // Changed from dollar value to count
      icon: <GppMaybe />,  // Shows unverified/warning status
    },
    {
      title: 'Rides',
      value: '1600',
      persentage: '18000.7%',
      icon: <DirectionsCar />,  // Direct representation of rides
    },
    {
      title: 'Revenue',
      persentage: '18000.7%',
      value: '$18,800',  // Fixed comma in number
      icon: <AttachMoney />,
    },
    {
      title: 'Offline Payment',
      persentage: '18000.7%',
      value: '$19,700',
      icon: <MoneyOff />,  // Represents cash/offline payments
    },
    {
      title: 'Online Payment',
      persentage: '18000.7%',
      value: '$18,700',
      icon: <CreditCard />,  // Represents digital payments
    },
    {
      title: 'Withdraw Request',
      persentage: '18000.7%',
      value: '1809',
      icon: <RequestQuote />,  // Specific to withdrawal requests
    }
  ];
  const serviceCategoriesData = {
    labels: ['Ride', 'Package', 'Schedule', 'Rental'],
    datasets: [
      {
        data: [500, 300, 200, 100],
        backgroundColor: [
          '#fd367b',
          '#36A2EB',
          '#FFCE56',
          '#4BC0C0'
        ],
        borderColor: [
          '#fff',
          '#fff',
          '#fff',
          '#fff'
        ],
        borderWidth: 1,
      },
    ],
  };

  const AcceptedRider = [
    {
      title: 'Accepted Rides',
      value: '9',
      icon: <DirectionsBike />,
      seeMore: 'See Details',
    },
    {
      title: 'Started Rides',
      value: '524',
      icon: <PlayCircle />,  // Shows ride in progress
      seeMore: 'See Details',
    },
    {
      title: 'Arrived Rides',
      value: '721',
      icon: <WhereToVote />,  // Shows arrival/destination reached
      seeMore: 'See Details',
    },
    {
      title: 'Scheduled Rides',
      value: '1600',
      icon: <Schedule />,  // Calendar/clock icon for scheduled rides
      seeMore: 'See Details',
    },
    {
      title: 'Cancelled Rides',
      value: '18',
      icon: <Cancel />,  // Clear cancellation icon
      seeMore: 'See Details',
    },
    {
      title: 'Completed Rides',
      value: '19',
      icon: <CheckCircle />,  // Checkmark for completed rides
      seeMore: 'See Details',
    },
    {
      title: 'Service Categories ',
      ServiceCategories: {
        totalRides: '1000',
        ride: '500',
        package: '300',
        Schedule: '200',
        rental: '100',
      }
    }
  ];

// Add these near your other useState declarations
const [currentTab, setCurrentTab] = useState('Cab');

// Status color mapping
const statusColors = {
  Accepted: '#4CAF50',
  Scheduled: '#FFC107',
  Completed: '#2196F3',
  Cancelled: '#F44336'
};

// Ride data by service type
const rideData = {
  Cab: [
    {
      rideNumber: '#100028',
      driver: 'Daniel Miller',
      email: 'driver@example.com',
      distance: '6.639 Km',
      status: 'Accepted'
    },
    {
      rideNumber: '#100027',
      driver: 'Daniel Miller',
      email: 'driver@example.com',
      distance: '6.639 Km',
      status: 'Accepted'
    },
    {
      rideNumber: '#100000',
      driver: 'Daniel Miller',
      email: 'driver@example.com',
      distance: '5.6 Mile',
      status: 'Accepted'
    }
  ],
  Parcel: [
    {
      rideNumber: '#100010',
      driver: 'Robert King',
      email: 'robert.driver@example.com',
      distance: '15 Km',
      status: 'Scheduled'
    }
  ],
  Freight: [
    {
      rideNumber: '#100005',
      driver: 'Brian Clark',
      email: 'brian.driver@example.com',
      distance: '6 Mile',
      status: 'Accepted'
    }
  ],
  Ambulance: [{
      rideNumber: '#100005',
      driver: 'Brian Clark',
      email: 'brian.driver@example.com',
      distance: '6 Mile',
      status: 'Accepted'
    }]
};

// Tab change handler
const handleTabChange = (event, newValue) => {
  setCurrentTab(newValue);
};

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <CrmLayout>
      <Box >
        {/* Header */}
        <Stack direction={"row"} justifyContent="space-between" alignItems="center" sx={{ mb: 3 }}>
          <Typography fontSize={20} className='bold'>
            Hello, <span style={{ color: "#fd367b" }}>Administrator</span>
          </Typography>
          <Stack direction="row" spacing={1} alignItems="center" sx={{ boxShadow: '0px 2px 4px rgba(18, 165, 81, 0.05)', borderRadius: 2, backgroundColor: "#fff", px: 2 }}>
            <Typography fontSize={16} className='SemiBold'>
              Sort By
            </Typography>
            <Select
              value={age}
              onChange={handleChange}
              sx={{
                border: "none",
                boxShadow: "none",
                '.MuiOutlinedInput-notchedOutline': {
                  border: 'none',
                },
                '&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
                  border: 'none',
                },
                '&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                  border: 'none',
                },
              }}
            >
              <MenuItem value={10} sx={{ color: "#000" }}>This Year</MenuItem>

            </Select>
          </Stack>

        </Stack>

        {/* Stats Cards */}
        <Grid container spacing={3} >
          {stats.map((stat, index) => (
            <Grid item xs={12} sm={6} md={4} xl={3} key={index}>
              <Paper sx={{ p: 3, borderRadius: 3 }}>
                <Stack direction="row" justifyContent="space-between" alignItems="center">
                  <Stack
                    direction="column" spacing={2}>
                    <Typography variant="h5" className='bold'>
                      {stat.value}
                    </Typography>
                    <Stack direction="column" spacing={1} >
                      <Typography variant="body2" className='SemiBold' color="#222222">
                        {stat.title}
                      </Typography>
                      <Typography variant="body2" className='Medium' color="#fd367b">
                        {stat.persentage}
                      </Typography>
                    </Stack>
                  </Stack>
                  <Avatar sx={{ bgcolor: "#fd367b", width: 56, height: 56 }}>
                    {stat.icon}
                  </Avatar>

                </Stack>

              </Paper>
            </Grid>
          ))}
        </Grid>
        <Grid container spacing={3} mt={1} >
          <Grid item xs={12} sm={6} md={9} xl={8} >
            <Grid container spacing={3}>
              {AcceptedRider.map((stat, index) => index < 6 && (<Grid item xs={12} sm={6} md={6} xl={4} >
                <Paper sx={{ p: 3, borderRadius: 3, height: '100%' }}>
                  <Stack direction="column" spacing={2}>
                    <Stack direction="row" spacing={2}>
                      <Avatar sx={{ bgcolor: "#fd367b", width: 56, height: 56 }}>
                        {stat.icon}
                      </Avatar>
                      <Stack direction="column" spacing={1}>
                        <Typography variant="body2" className='SemiBold' color="gray">
                          {stat.title}
                        </Typography>
                        <Typography variant="body2" className='bold'>
                          {stat.value}
                        </Typography>
                      </Stack>
                    </Stack>
                    <Button variant="outlined" color="primary" size='small' sx={{textTransform:"capitalize"}}>
                      {stat.seeMore}
                    </Button>
                  </Stack>
                </Paper>
              </Grid>))}
            </Grid>
          </Grid>
          {AcceptedRider.slice(6, 7).map((stat, index) => index < 6 && (

            <Grid item xs={12} md={3} xl={4} key="pie-chart">
              <Paper sx={{ borderRadius: 3, height: '100%', p: 3 }}>
                <Typography variant="h6" className='bold' gutterBottom>
                  {stat.title}
                </Typography>
                <Box sx={{ maxHeight: '250px', }}>
                  <Pie
                    data={{
                      labels: ['Ride', 'Package', 'Schedule', 'Rental'],
                      datasets: [{
                        data: [
                          stat.ServiceCategories?.ride,
                          stat.ServiceCategories?.package,
                          stat.ServiceCategories?.Schedule,
                          stat.ServiceCategories?.rental
                        ],
                        backgroundColor: [
                          '#fd367b',
                          '#36A2EB',
                          '#FFCE56',
                          '#4BC0C0'
                        ],
                        borderColor: '#fff',
                        borderWidth: 1
                      }]
                    }}
                    options={{
                      responsive: true,
                      maintainAspectRatio: false,
                      plugins: {
                        legend: { position: 'right' }
                      }
                    }}
                  />
                </Box>

              </Paper>
            </Grid>
          ))}

        </Grid>

        <Grid container spacing={3} mt={3}>
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 3, borderRadius: 3, height: '100%' }}>
              <Typography variant="h6" className='bold' gutterBottom>
                Service Performance
              </Typography>
              <Box sx={{ height: '400px' }}>
                <Bar
                  data={serviceData}
                  options={{
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                      legend: {
                        position: 'top',
                      },
                    },
                    scales: {
                      x: {
                        stacked: true, // For stacked bars
                      },
                      y: {
                        stacked: true, // For stacked bars
                        beginAtZero: true
                      }
                    }
                  }}
                />
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 3, borderRadius: 3 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                <Typography variant="h6" className='bold'>
                  Top Drivers
                </Typography>
                <Button variant="text" color="primary">
                  View All
                </Button>
              </Box>

              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Driver</TableCell>
                      <TableCell align="right">Rides</TableCell>
                      <TableCell align="right">Ratings</TableCell>
                      <TableCell align="right">Earnings</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {topDrivers.map((driver, index) => (
                      <TableRow key={index}>
                        <TableCell>
                          <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Avatar sx={{ bgcolor: '#fd367b', mr: 2 }}>
                              {driver.name.charAt(0)}
                            </Avatar>
                            <Box>
                              <Typography variant="body2" className='bold'>{driver.name}</Typography>
                              <Typography variant="caption" color="textSecondary">{driver.email}</Typography>
                            </Box>
                          </Box>
                        </TableCell>
                        <TableCell align="right">{driver.rides}</TableCell>
                        <TableCell align="right">
                          {driver.rating > 0 ? (
                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                              ({driver.rating.toFixed(1)})
                            </Box>
                          ) : 'N/A'}
                        </TableCell>
                        <TableCell align="right">{driver.earnings}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Paper>
          </Grid>
        </Grid>


<Grid container spacing={3} mt={3}>
  <Grid item xs={12} md={6}>
    <Paper sx={{ p: 3, borderRadius: 3 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
        <Typography variant="h6" className='bold'>
          Recent Rides
        </Typography>
        <Button variant="text" color="primary">
          View All
        </Button>
      </Box>
      
      <Tabs 
        value={currentTab} 
        onChange={handleTabChange}
        variant="scrollable"
        scrollButtons="auto"
        sx={{ mb: 3 }}
      >
        {Object.keys(rideData).map((service) => (
          <Tab 
            key={service} 
            label={service} 
            value={service} 
            sx={{ textTransform: 'none' }}
          />
        ))}
      </Tabs>
      
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Ride Number</TableCell>
              <TableCell>Driver</TableCell>
              <TableCell align="right">Distance</TableCell>
              <TableCell align="right">Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rideData[currentTab].map((ride, index) => (
              <TableRow key={index}>
                <TableCell>{ride.rideNumber}</TableCell>
                <TableCell>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Avatar sx={{ bgcolor: '#fd367b', mr: 2 }}>
                      {ride.driver.charAt(0)}
                    </Avatar>
                    <Box>
                      <Typography variant="body2" className='bold'>{ride.driver}</Typography>
                      <Typography variant="caption" color="textSecondary">{ride.email}</Typography>
                    </Box>
                  </Box>
                </TableCell>
                <TableCell align="right">{ride.distance}</TableCell>
                <TableCell align="right">
                  <Box sx={{ 
                    display: 'inline-block',
                    px: 1.5,
                    py: 0.5,
                    borderRadius: 1,
                    backgroundColor: `${statusColors[ride.status]}20`,
                    color: statusColors[ride.status]
                  }}>
                    {ride.status}
                  </Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  </Grid>
  <Grid item xs={12} md={6}>
  <Paper sx={{ p: 3, borderRadius: 3, height: '100%' }}>
    <Typography variant="h6" className='bold'  gutterBottom>
      Average Revenue Trends
    </Typography>
    <Box sx={{ maxHeight: '350px' }}>
      <Line
        data={averageRevenueData}
        options={{
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: 'top',
            },
            tooltip: {
              callbacks: {
                label: function(context) {
                  return `${context.dataset.label}: $${context.raw.toFixed(2)}`;
                }
              }
            }
          },
          scales: {
            y: {
              beginAtZero: false,
              ticks: {
                callback: function(value) {
                  return `$${value}`;
                }
              }
            }
          }
        }}
      />
    </Box>
  </Paper>
</Grid>
</Grid>
      </Box>
    </CrmLayout>
  );
}

export default Home;