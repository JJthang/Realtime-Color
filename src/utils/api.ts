// import { NEXT_PUBLIC_API_URL, NEXT_PUBLIC_AUTH_API_URL } from "./env";
// import { ROUTES } from "./routes";

// interface FetchConfig extends RequestInit {
//   isAuthApi?: boolean;
//   timeout?: number;
//   url?: string;
// }

// interface ApiError {
//   detail?: string;
//   message?: string;
// }

// // check time request after 20s
// const fetchWithTimeout = (
//   url: string,
//   options: RequestInit = {},
//   timeout = 20000
// ): Promise<Response> => {
//   return new Promise((resolve, reject) => {
//     const controller = new AbortController();
//     const timeoutId = setTimeout(() => {
//       controller.abort();
//       reject(new Error("Request timeout"));
//     }, timeout);

//     fetch(url, {
//       ...options,
//       signal: controller.signal,
//     })
//       .then(resolve)
//       .catch(reject)
//       .finally(() => clearTimeout(timeoutId));
//   });
// };

// // Response interceptor logic
// const handleResponse = async (response: Response): Promise<Response> => {
//   if (!response.ok) {
//     let errorMessage: string | undefined;

//     try {
//       const errorData: ApiError = await response.json();
//       errorMessage = errorData.detail || errorData.message;
//     } catch {}

//     // Chỉ hiển thị toast khi ở client-side
//     if (typeof window !== "undefined" && errorMessage) {
//       //   toast.error(errorMessage);
//     }

//     if ([401, 403].includes(response.status) && typeof window !== "undefined") {
//       if (!window.location.href.includes(ROUTES.SignIn)) {
//         // clearUserInfoAndToken();
//         localStorage.setItem("auth_redirect", "true");
//         const authExpiredEvent = new Event("AUTH_REDIRECT_NEEDED");
//         window.dispatchEvent(authExpiredEvent);
//       }
//     }

//     throw new Error(errorMessage || `HTTP ${response.status}`);
//   }

//   return response;
// };

// const prepareRequest = (
//   config: FetchConfig
// ): { url: string; options: RequestInit } => {
//   const { isAuthApi = false, timeout = 20000, ...requestInit } = config;

//   let token: string | undefined;
//   if (typeof window !== "undefined") {
//     // token = getCommonStateFromLocalStorage()?.token;
//   }

//   const isAuthEndpoint = isAuthApi;

//   if (typeof window !== "undefined" && !token && !isAuthEndpoint) {
//     throw new Error("Please log in again");
//   }

//   const headers = new Headers(requestInit.headers);

//   if (!headers.has("Content-Type")) {
//     headers.set("Content-Type", "application/json");
//   }

//   if (token) {
//     headers.set("Authorization", isAuthEndpoint ? `Bearer ${token}` : token);
//   }

//   const baseURL = isAuthApi ? NEXT_PUBLIC_AUTH_API_URL : NEXT_PUBLIC_API_URL;

//   return {
//     url: `${baseURL}${config.url || ""}`,
//     options: {
//       ...requestInit,
//       headers,
//     },
//     timeout,
//   };
// };

// export const fetchApi = async (
//   url: string,
//   config: FetchConfig = {},
//   isAuthApi: boolean = false
// ): Promise<Response> => {
//   const finalConfig = { ...config, isAuthApi, url };

//   try {
//     const { url: finalUrl, options } = prepareRequest(finalConfig);
//     const { timeout, ...fetchOptions } = options as FetchConfig;

//     const response = await fetchWithTimeout(finalUrl, fetchOptions, timeout);
//     return await handleResponse(response);
//   } catch (error) {
//     throw error;
//   }
// };
