"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors")); // Importa cors
const app = (0, express_1.default)();
app.use((0, cors_1.default)({
    origin: "http://localhost:4200",
    methods: "GET,POST,PUT,DELETE",
    allowedHeaders: "Content-Type,Authorization"
}));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
const index_1 = __importDefault(require("./routes/index"));
app.use(index_1.default);
app.listen(3000, () => {
    console.log("Server on port", 3000);
});
