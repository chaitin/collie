import { Grid, Box, Typography } from "@mui/material";
import Image from "next/image";

const FEATURE_LIST = [
  {
    title: "便捷管理",
    content: (
      <>
        <Typography variant="body1" sx={{ mb: "10px" }}>
          无需开放端口，无需连接 SSH，支持管理大规模主机
        </Typography>
        <Typography variant="body1">
          一键绑定主机，实现永久托管
        </Typography>
      </>
    ),
  },
  {
    title: "内网穿透",
    content: (
      <>
        <Typography variant="body1" sx={{ mb: "10px" }}>
          使用 Agent 模式，服务器无需公网 IP
        </Typography>
        <Typography variant="body1">
          打通处于不同内网主机之间的连通关系，实现跨区域组网
        </Typography>
      </>
    ),
  },
  {
    title: "资源监控",
    content: (
      <>
        <Typography variant="body1" sx={{ mb: "10px" }}>
          实时监控 CPU、内存、磁盘、网络等资源，提供秒级告警
        </Typography>
        <Typography variant="body1">
          支持查看历史资源占用情况
        </Typography>
      </>
    ),
  },
  {
    title: "安全扫描",
    content: (
      <>
        <Typography variant="body1" sx={{ mb: "10px" }}>
          提供完善的安全扫描体系，使系统免于受到黑客攻击
        </Typography>
        <Typography variant="body1">
          安全能力由长亭牧云主机安全引擎驱动，业界领先
        </Typography>
      </>
    ),
  },
];

const Features = () => {
  return (
    <Box
      sx={{
        borderRadius: "12px",
        backgroundColor: "#fff",
        color: "#000",
        boxShadow: "0 12px 25px -12px rgba(93,99,112, 0.2)",
        px: 5,
        pb: 5,
      }}
    >
      <Grid container spacing={5}>
        {FEATURE_LIST.map((feature) => (
          <Grid item xs={12} sm={6} key={feature.title}>
            <Typography
              variant="h5"
              sx={{ fontWeight: 500, fontSize: "18px", display: "flex" }}
            >
              <Image
                src="/images/feature.svg"
                alt="feature"
                width={40}
                height={40}
                priority
              />
              <Box component="span" sx={{ mt: "5px" }}>
                {feature.title}
              </Box>
            </Typography>
            <Box
              sx={{ color: "rgba(0,0,0,.7)", whiteSpace: "pre-line", mt: 3 }}
            >
              {feature.content}
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Features;
