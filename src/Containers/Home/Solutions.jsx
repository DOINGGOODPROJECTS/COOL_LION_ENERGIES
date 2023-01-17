import { Button, Stack, Typography } from "@mui/material";
import React from "react";
import { useTheme } from "styled-components";

const Solutions = () => {
  const { palette } = useTheme();
  return (
    <Stack
      sx={{ background: palette.primary.main }}
      justifyContent="center"
      alignItems={"center"}
    >
      <Stack
        justifyContent={"center"}
        alignItems={"center"}
        sx={{ marginTop: "15vh" }}
      >
        <Typography variant="h2" sx={{ color: palette.secondary.light }}>
          Our solutions{" "}
        </Typography>
        <Typography sx={{ color: palette.secondary.light }}>
          Innovation that powers green tech.
        </Typography>
        <SolutionContent inverse={true} />
        <SolutionContent inverse={false} />
        <SolutionContent inverse={true} />
        <SolutionContent inverse={false} />
      </Stack>
    </Stack>
  );
};

const SolutionContent = ({ inverse = false }) => {
  const { palette, width } = useTheme();
  return (
    <Stack
      direction={inverse === false ? "row" : "row-reverse"}
      justifyContent="space-between"
      alignItems={"center"}
      sx={{
        width: width,
        height: "530px",
        padding: "15px 10px",
      }}
    >
      <Stack
        sx={{ width: "53%", height: "100%" }}
        alignItems={inverse === false ? 'flex-start' : "flex-end"}
        justifyContent={"space-around"}
      >
        <Stack spacing={2}>
          <Typography variant="h3" sx={{ color: palette.secondary.light }}>
            Cool Emergency Rental
          </Typography>
          <Typography
            sx={{ fontSize: "1.3rem", color: palette.secondary.light }}
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit quam
            laboriosam, cum obcaecati eaque maiores.
          </Typography>
        </Stack>
        <Button
          sx={{
            background: palette.secondary.light,
            color: palette.primary.main,
            "&:hover": {
              background: palette.secondary.main,
            },
          }}
        >
          Find Out more
        </Button>
      </Stack>
      <Stack
        sx={{ width: "45%", height: "100%", }}
        justifyContent="center"
        alignItems="center"
      >
        <img
          src=" https://picsum.photos/1000/1000"
          alt="les information"
          style={{
            width: "100%",
            maxHeight: "80%",
            borderRadius:'40px'
          }}
        />
      </Stack>
    </Stack>
  );
};

export default Solutions;
