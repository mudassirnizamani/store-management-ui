import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Topbar from "../../components/Topbar/Topbar";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../../../axios";
import { SubmitHandler, Controller } from "react-hook-form";

// Importing Material Ui Components - Mudasir Ali
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useForm } from "react-hook-form";
import { InventoryRoutes } from "../../../../api/Inventory";
import { useNavigate } from "react-router-dom";

const validationSchema = yup.object().shape({
  name: yup.string().required(),
  weight: yup.string().required(),
  address: yup.string().required(),
  email: yup.string().required(),
});

const Create = () => {
  const navigate = useNavigate();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const Submit: SubmitHandler<any> = async (formData:any) => {
    const model = {
      name: formData.name,
      address: formData.address,
      email: formData.email,
      weight: formData.weight,
    };
    try {
      const request = await api.post(InventoryRoutes.Create, model);
      navigate("/");
    } catch (err:any) {
      console.log(err.response);
    }
  };

  return (
    <div className="out">
      <div className="page5 js-page4">
        <Topbar />

        <div className="page5__wrapper">
          <Sidebar />
          <div className="page5__container">
            <h1>Create New</h1>

            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit(Submit)}
              autoComplete="off"
            >
              <Controller
                name="name"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    size="small"
                    fullWidth={true}
                    {...field}
                    label="Name"
                    error={!!errors.name}
                    helperText={errors.name ? errors.name?.message : ""}
                    sx={{
                      marginBottom: "1rem",
                    }}
                    variant="outlined"
                  />
                )}
              />

              <Controller
                name="address"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    size="small"
                    fullWidth={true}
                    {...field}
                    label="Address"
                    error={!!errors.address}
                    helperText={errors.address ? errors.address?.message : ""}
                    sx={{
                      marginBottom: "1rem",
                    }}
                    variant="outlined"
                  />
                )}
              />

              <Controller
                name="email"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    size="small"
                    fullWidth={true}
                    {...field}
                    label="Email"
                    error={!!errors.email}
                    helperText={errors.email ? errors.email?.message : ""}
                    sx={{
                      marginBottom: "1rem",
                    }}
                    variant="outlined"
                  />
                )}
              />

              <Controller
                name="weight"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    size="small"
                    fullWidth={true}
                    {...field}
                    label="Weight"
                    error={!!errors.weight}
                    helperText={errors.weight ? errors.weight?.message : ""}
                    sx={{
                      marginBottom: "1rem",
                    }}
                    variant="outlined"
                  />
                )}
              />

              <Button
                sx={{
                  borderRadius: "5px",
                }}
                variant="contained"
                type="submit"
              >
                Create
              </Button>
            </Box>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Create;
