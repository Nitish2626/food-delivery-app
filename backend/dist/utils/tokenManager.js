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
export const createToken = (id, email, expiresIn) => {
    const payload = { id, email };
    const token = jwt.sign(payload, `${process.env.JWT_SECRET}`, {
        expiresIn
    });
    return token;
};
export const verifyToken = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const token = yield req.signedCookies["Token"];
    console.log("token", token);
    if (!token || token.trim() === "") {
        res.status(401).send("Token not Received");
        next();
    }
    else {
        const verified = jwt.verify(token, `${process.env.JWT_SECRET}`);
        console.log("verified", verified);
        if (verified) {
            res.locals.jwtData = verified;
        }
        else {
            res.status(401).send("Token expired");
        }
        next();
    }
});
