import React from "react";
import { add, Button } from "my-lib";

// type error
const res = add(1, "adsf");

const MyComp = () => <Button type="primary" />;
