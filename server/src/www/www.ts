import app from "..";
import config from '../config/config'
app.listen(config.PORT,()=>console.log(`server is running on port ${config.PORT}`)
)

// {
//     "compilerOptions": {
//       "sourceMap": true,
//       "outDir": "./dist",
//       "strict": true,
//       "lib": ["esnext"],
//       "esModuleInterop": true,
//       "rootDir": "./src"
//     }
//   }