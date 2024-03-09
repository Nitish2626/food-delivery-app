var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import jwt from "jsonwebtoken";
export const createToken = (id, name, expiresIn) => {
    const payload = { id, name };
    const token = jwt.sign(payload, `${process.env.JWT_SECRET}`, {
        expiresIn
    });
    return token;
};
export const verifyToken = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const token = yield req.signedCookies["Token"];
    if (!token || token.trim() === "") {
        // res.status(401).send("Token not Received");
        console.log("Token not received");
        next();
    }
    else {
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        console.log("ver", verified);
        if (verified) {
            res.locals.jwtData = verified;
        }
        else {
            console.log("Token expired");
        }
        next();
    }
});
