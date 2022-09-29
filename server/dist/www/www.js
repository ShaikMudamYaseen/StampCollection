"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = __importDefault(require(".."));
const config_1 = __importDefault(require("../config/config"));
__1.default.listen(config_1.default.PORT, () => console.log(`server is running on port ${config_1.default.PORT}`));
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
//# sourceMappingURL=www.js.map