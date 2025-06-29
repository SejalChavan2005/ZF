"use server"
import { redirect } from "next/navigation";
import { FormState, SignupFormSchema } from "./type";
import { BACKEND_URL } from "./constants";

export async function signUp(
    state: FormState,
    formData: FormData
): Promise<FormState> {

    //..
  const password = formData.get("password") as string;
  const confirmPassword = formData.get("confirmPassword") as string;

  
  if (password !== confirmPassword) {
    return {
      error: {
        password: ["Passwords do not match."], // Will be shown in frontend
      },
    };
  }
//..
    const validationFields = SignupFormSchema.safeParse({
        name: formData.get("name"),
        email: formData.get("email"),
        password: formData.get("password"),
    });

    if (!validationFields.success) {
        return {
            error: validationFields.error.flatten().fieldErrors,
        };
    }

    const response = await fetch(`${BACKEND_URL}/auth/signup`,{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(validationFields.data),
        }
    );
    
    if (response.ok) {
    redirect("/auth/signin");
  } else
    return {
      message:
        response.status === 409
          ? "The user is already existed!"
          : response.statusText,
    };
}