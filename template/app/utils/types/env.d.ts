declare module 'react-native-config' {
  interface Env {
    ENV: 'DEVELOPMENT' | 'STAGING' | 'PRODUCTION'
    EXAMPLE_API_KEY: 'csdkvnsdkjn43j5n3k4nsd'
  }
  const Config: Env
  export default Config
}
