/**
 * @format
 */

import React from "react";
import app from "./App";
import { AppRegistry } from "react-native";
import { name as appName } from "./app.json";
import "react-native-gesture-handler";
AppRegistry.registerComponent(appName, () => app);
