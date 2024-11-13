import { toast } from "sonner";

interface ErrorResponse {
    response?: {
        data?: {
            message?: string;
        };
    };
}

export const handleError = (error: unknown) => {
    const typedError = error as ErrorResponse;
    console.log(typedError?.response);

    if (typedError?.response?.data?.message) {
        toast("Error: " + typedError.response.data.message);
    } else {
        toast("An unexpected error occurred");
    }
};

// import { toast } from "sonner";

// export const handleError = (error: any) => {
//     console.log(error.data.message);
//     toast("Error: " + error.data.message);
// };
