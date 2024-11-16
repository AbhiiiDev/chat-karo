import {
  Button,
  Container,
  Grid,
  PasswordInput,
  TextInput,
} from "@mantine/core";
import { useForm } from "@mantine/form";

const LoginPage = () => {
  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      firstName: "",
      lastName: "",
      password: "",
      email: "",
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      firstName:(value)=>(value.length>=3 ? null:"Firstname too Short"),
      lastName:(value)=>(value.length>=3 ? null:"Lastname too Short"),
      password:(value)=>((value.length>=6 )? null:"Password should be atleast 6 character long"),

    },
  });


//   const handleSubmit=()=>{

//   }

  return (
    <form
      className="flex flex-col gap-4 min-h-screen justify-center items-center"
      onSubmit={form.onSubmit((values) => console.log(values))}
    >
      <Container size={"sm"}>
        <Grid>
          <Grid.Col span={{ base: 12, md: 6, lg: 6 }}>
            <TextInput
              key={form.key("firstName")}
              {...form.getInputProps("firstName")}
              withAsterisk
              label="Enter First Name"
              placeholder="John"
            />
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6, lg: 6 }}>
            <TextInput
              key={form.key("lastName")}
              {...form.getInputProps("lastName")}
              withAsterisk
              label="Enter Last Name"
              placeholder="Doe"
            />
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6, lg: 6 }}>
            <TextInput
              key={form.key("email")}
              {...form.getInputProps("email")}
              withAsterisk
              label="Enter Email "
              placeholder="johndoe@gmail.com"
            />
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6, lg: 6 }}>
            <PasswordInput
              key={form.key("password")}
              {...form.getInputProps("password")}
              label="Input Password"
              placeholder="******"
            />
          </Grid.Col>
        </Grid>
      </Container>
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default LoginPage;
