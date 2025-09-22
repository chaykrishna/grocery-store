import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Grid, Card, CardContent, Typography } from "@mui/material";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/api/products")
      .then(res => setProducts(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>Products</Typography>
      <Grid container spacing={2}>
        {products.length === 0 && <Typography>No products available.</Typography>}
        {products.map(p => (
          <Grid item xs={12} sm={6} md={4} key={p.id}>
            <Card>
              <CardContent>
                <Typography variant="h6">{p.name}</Typography>
                <Typography>Price: ₹{p.price}</Typography>
                <Typography>{p.description}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
