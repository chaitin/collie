import { Typography, Box, Button, alpha } from "@mui/material";
import Title from "@/components/Home/Title";
import FunctionTable from "./FunctionTable";
import Consultation from "./Consultation";
import Link from "next/link";
const FREE_FUNCTION = [
  "资源占用监控",
  "文件管理",
  "自定义黑白名单",
  "精细化引擎调节",
  "可视化安全分析",
];
const ENTERPRISE_FUNCTION = [
  "资源占用监控",
  "文件管理",
  "集群式可扩展部署",
  "CC 攻击防护",
  "业务 API 智能建模",
  "Bot 管理，恶意 Bot 防护",
  "专业技术支持服务",
  "漏洞应急服务",
];

const Version = () => {
  return (
    <>
      <FunctionTable />
    </>
  );
};

export default Version;
