import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
  FaGlobe,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { BsNintendoSwitch } from "react-icons/bs";
import { Platform } from "@/hooks/useGames";
import { HStack, Icon } from "@chakra-ui/react";
import { Tooltip } from "@/components/ui/tooltip";
import { IconType } from "react-icons";

interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    // slug: playstation => icon: FaPlaystation
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    mac: FaApple,
    linux: FaLinux,
    android: FaAndroid,
    web: FaGlobe,
    ios: MdPhoneIphone,
    nintendo: BsNintendoSwitch,
  };

  return (
    <HStack marginY={1}>
      {platforms.map((platform) => (
        <Tooltip key={platform.id} content={platform.name} showArrow>
          <Icon as={iconMap[platform.slug]} color="gray.500" />
        </Tooltip>
      ))}
    </HStack>
  );
};

export default PlatformIconList;
