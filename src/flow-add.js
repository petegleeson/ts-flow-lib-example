// @flow
import React from "react";
import { add, Button } from "my-lib";

// type error
const res = add("hi", 1);

const MyComp = () => <Button type="default" />;
