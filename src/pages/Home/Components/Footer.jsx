import React from 'react';
import { Box, Typography, Link, Container, Grid } from '@mui/material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'primary.main', // Assuming 'primary.main' is a defined color in your theme
        color: 'primary.contrastText',
        py: 4,
        mt: 'auto', // Pushes the footer to the bottom
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Supermercado Modelo
            </Typography>
            <Typography variant="body2">
              Qualidade e economia para sua família!
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Endereço e Contato
            </Typography>
            <Typography variant="body2">
              Rua das Flores, 123 - Centro
            </Typography>
            <Typography variant="body2">
              Cidade Exemplo, SP - 12345-678
            </Typography>
            <Typography variant="body2">
              Telefone: (11) 1234-5678
            </Typography>
            <Typography variant="body2">
              Email: <Link href="mailto:contato@supermercadomodelo.com" color="inherit">contato@supermercadomodelo.com</Link>
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Horário de Funcionamento
            </Typography>
            <Typography variant="body2">
              Segunda a Sábado: 8h às 21h
            </Typography>
            <Typography variant="body2">
              Domingos e Feriados: 9h às 18h
            </Typography>
          </Grid>
        </Grid>
        <Box mt={4} sx={{ borderTop: '1px solid rgba(255, 255, 255, 0.2)', pt: 2, textAlign: 'center' }}>
          <Typography variant="body2" color="inherit">
            &copy; {new Date().getFullYear()} Supermercado Modelo. Todos os direitos reservados.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
