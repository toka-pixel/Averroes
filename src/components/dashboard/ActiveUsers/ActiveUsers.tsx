import React, { useState, MouseEvent, useEffect, ChangeEvent } from "react";
import {
  Avatar,
  AvatarGroup,
  Tooltip,
  IconButton,
  Menu,
  MenuItem,
  FormControlLabel,
  Box,
  FormControl,
  RadioGroup,
  Radio,
} from "@mui/material";
import useGetAllUsers from "@/components/auth/Hooks/useGetAllUsers";
import { UserInterface } from "@/shared/user.interface";
import { useAppDispatch } from "@/hooks/storeIndex";
import { handleTasks } from "@/store/User/userSlice";
import useGetTasksOfUser from "../Task/hooks/useGetTasksOfUser";

const ActiveUsers = () => {
  const { data: allUsersData } = useGetAllUsers();
console.log(allUsersData)
  const [selectedUsers] = useState<Array<string>>([]);
  const [activeUser, setActiveUser] = useState<string>("1");

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);
  const dispatch = useAppDispatch();

  const { data: userTasks } = useGetTasksOfUser(activeUser || "1");

  const checkUser = (id: string) =>
    selectedUsers.findIndex((userId) => userId === id);

  const handleTasksOfUser = (event: ChangeEvent<HTMLInputElement>) => {
    setActiveUser(event.target.value);
    // dispatch(selectedActiveUsers({ id }));
    // if (checkUser(id) === -1) {
    //   setSelectedUsers([...selectedUsers, id]);
    //   setActiveUser(id);
    //   // setNotActiveUser("");
    // } else {
    //   setSelectedUsers((prev) => prev.filter((userId) => userId !== id));
    //   setActiveUser("");
    //   // setNotActiveUser(id);
    //   setTasksList((prev) => prev.filter((task) => task.userId !== id));
    // }
  };

  useEffect(() => {
    if (activeUser?.length > 0 && userTasks) dispatch(handleTasks(userTasks));
  }, [activeUser, userTasks]);

  const handleOpenMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  return (
    <>
      {allUsersData?.length > 0 && (
        <>
          <AvatarGroup
            max={4}
            componentsProps={{
              additionalAvatar: {
                onClick: handleOpenMenu,
                sx: {
                  cursor: "pointer",
                },
              },
            }}
          >
            {allUsersData?.map((user: UserInterface, index: number) => (
              <Tooltip
                title={`${user.firstName} ${user.lastName}`}
                key={index}
                placement="top"
              >
                <IconButton
                  color="success"
                  sx={{
                    marginLeft: "-10px",
                    marginTop: "-8px",
                    cursor: "pointer",
                    "& .MuiAvatar-root": {
                      borderColor: activeUser === user?.id ? "primary.main" : "",
                      borderWidth: "3px",
                    },
                  }}
                  onClick={() => setActiveUser(user.id)}
                >
                  <Avatar  color="success" src={user.avatar} />
                </IconButton>
              </Tooltip>
            ))}
          </AvatarGroup>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleCloseMenu}
            disableScrollLock
            transformOrigin={{ vertical: "top", horizontal: "left" }}
          >
            {allUsersData
              ?.slice(3, allUsersData.length)
              .map((user: UserInterface, index: number) => (
                <MenuItem key={index}>
                  <FormControl>
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      value={activeUser}
                      name="radio-buttons-group"
                      onChange={handleTasksOfUser}
                    >
                      <FormControlLabel
                        value={user.id}
                        control={<Radio />}
                        label={
                          <Box sx={{ display: "flex" }}>
                            <Avatar
                              src={user.avatar}
                              sx={{
                                width: 24,
                                height: 24,
                                marginRight: "10px",
                              }}
                            />
                            {`${user.firstName} ${user.lastName}`}
                          </Box>
                        }
                      />
                    </RadioGroup>
                  </FormControl>
                </MenuItem>
              ))}
          </Menu>
        </>
      )}
    </>
  );
};

export default ActiveUsers;
