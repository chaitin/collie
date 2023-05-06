import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Box,
  Collapse,
  ListItem,
  ListItemIcon,
  ListItemText,
  alpha,
  Tooltip,
} from "@mui/material";
import React, { useState } from "react";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { Icon } from "@/components";

const Support = () => {
  return (
    <Icon type="icon-duihao" color="success.main" sx={{ margin: "auto" }} />
  );
};
const NotSupport = () => {
  return <Icon type="icon-chahao" color="error.main" sx={{ margin: "auto" }} />;
};

const FontSupport = (props: { text: string; color: string; }) => {
  const { text, color } = props
  return <Box color={ color }>{ text }</Box>;
};

const FunctionTable = () => {
  const [open, setOpen] = useState<string[]>(["基本功能", "文件管理", "在线终端", "资源监控"]);

  const cells = [
    {
      title: "基本功能",
      data: [
        {
          name: "资源占用监控",
          experience: <Support />,
          basics: <Support />,
        }, {
          name: "跨区域组网",
          experience: <Support />,
          basics: <Support />,
        }, {
          name: "Docker 管理",
          experience: <Support />,
          basics: <Support />,
        }, {
          name: "安全扫描",
          experience: <Support />,
          basics: <Support />,
        }, {
          name: "进程管理",
          experience: <Support />,
          basics: <Support />,
        }, {
          name: "用户管理",
          experience: <Support />,
          basics: <Support />,
        }, {
          name: "端口管理",
          experience: <Support />,
          basics: <Support />,
        }, {
          name: "登录审计",
          experience: <Support />,
          basics: <Support />,
        }, {
          name: "可管理主机数量",
          experience: <FontSupport text="3 台" color="error.main" />,
          basics: <FontSupport text="无限制" color="success.main" />,
        }, {
          name: "扣费标准",
          experience: <FontSupport text="免费" color="success.main" />,
          basics: <FontSupport text="0.05 元 / 台 / 天" color="success.main" />,
        }
      ]
    },
    {
      title: "文件管理",
      data: [
        {
          name: "在线编辑文件",
          experience: <Support />,
          basics: <Support />,
        }, {
          name: "文件上传大小限制",
          tip: "",
          experience: <FontSupport text="50 MB" color="error.main" />,
          basics: <FontSupport text="500 MB" color="success.main" />,
        }, {
          name: "文件传输速率限制",
          experience: <FontSupport text="5 Mbps" color="error.main" />,
          basics: <FontSupport text="50 Mbps" color="success.main" />,
        }
      ]
    },
    {
      title: "在线终端",
      data: [
        {
          name: "终端远程协助",
          experience: <Support />,
          basics: <Support />,
        }, {
          name: "Docker 容器终端",
          experience: <Support />,
          basics: <Support />,
        },
      ]
    },
    {
      title: "资源监控",
      data: [
        {
          name: "实时资源监控",
          experience: <Support />,
          basics: <Support />,
        }, {
          name: "历史资源监控",
          experience: <Support />,
          basics: <Support />,
        }, {
          name: "监控 CPU 使用情况",
          experience: <Support />,
          basics: <Support />,
        }, {
          name: "监控内存使用情况",
          experience: <Support />,
          basics: <Support />,
        }, {
          name: "监控磁盘容量情况",
          experience: <Support />,
          basics: <Support />,
        }, {
          name: "监控磁盘吞吐情况",
          experience: <Support />,
          basics: <Support />,
        }, {
          name: "监控网络吞吐情况",
          experience: <Support />,
          basics: <Support />,
        }
      ]
    }
  ]

  const handleClick = (id: string) => {
    if (open?.includes(id)) {
      const udpateOpen = [...open]
      udpateOpen.splice(open?.indexOf(id), 1)
      setOpen([...udpateOpen])
    } else {
      setOpen((open) => [...open, id])
    }
  };

  return (
    <>
      <TableContainer>
        <Table
          sx={{
            ".MuiTableCell-root": {
              border: "none",
              backgroundColor: "transparent",
              px: "12px",
            },
          }}
          style={{marginTop: '48px'}}
        >
          <TableHead>
            <TableRow>
              <TableCell sx={{ width: "33%" }} />
              <TableCell align="center" sx={{ width: "33%", fontSize: "16px" }}>
                <Box
                  sx={(theme) => ({
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                    height: "40px",
                    borderRadius: "4px",
                    color: theme.palette.primary.main,
                    backgroundColor: alpha(theme.palette.primary.main, 0.2),
                  })}
                >
                  个人版
                </Box>
              </TableCell>
              <TableCell align="left" sx={{ width: "33%", fontSize: "16px" }}>
                <Box
                  sx={(theme) => ({
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                    color: theme.palette.primary.main,
                    backgroundColor: alpha(theme.palette.primary.main, 0.1),
                    height: "40px",
                    borderRadius: "4px",
                  })}
                >
                  专业版
                </Box>
              </TableCell>
            </TableRow>
          </TableHead>
        </Table>
      </TableContainer>
      {cells?.map(data =>
        <React.Fragment key={`sub-table-${data.title}`}>
          <ListItem
            onClick={() => handleClick(data?.title)}
            sx={{
              backgroundColor: "#EFF1F8",
              borderRadius: "4px",
              cursor: "pointer",
              pl: "20px",
            }}
          >
            <ListItemText
              primary={data.title}
              sx={{ ".MuiTypography-root": { fontSize: "16px" } }}
            />
            <ListItemIcon sx={{ color: "#000" }}>
              {open?.includes(data?.title) ? <ExpandLess /> : <ExpandMore />}
            </ListItemIcon>
          </ListItem>
          <Collapse in={open?.includes(data?.title)} timeout="auto" unmountOnExit sx={{ width: "100%" }}>
            <TableContainer>
              <Table
                sx={{
                  ".MuiTableRow-root": {
                    "&:last-of-type": {
                      ".MuiTableCell-root": {
                        borderBottom: "none",
                      },
                    },
                  },
                  ".MuiTableCell-root": {
                    pl: "20px !important",
                    pr: "8px !important",
                    py: "12px !important",
                    backgroundColor: "transparent !important",
                    color: "#000",
                    borderRight: "1px solid",
                    borderColor: "rgba(0,0,0,.04)",
                    "&:last-of-type": {
                      borderRight: "none",
                    },
                  },
                }}
              >
                <TableBody
                  sx={{
                    backgroundColor: alpha("#EFF1F8", 0.6),
                  }}
                >
                  {data.data.map((item) => (
                    <TableRow key={item.name}>
                      <TableCell sx={{ width: "33%" }}>
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                          {item.name}
                          <Tooltip title={item.tip} arrow placement="right">
                            <Box component="span" sx={{ ml: 1 }}>
                              <Icon type="icon-bangzhu1" />
                            </Box>
                          </Tooltip>
                        </Box>
                      </TableCell>
                      <TableCell sx={{ width: "33%" }} align="center">
                        {item.experience}
                      </TableCell>
                      <TableCell sx={{ width: "33%" }} align="center">
                        {item.basics}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Collapse></React.Fragment>)}
    </>
  );
};

export default FunctionTable;
