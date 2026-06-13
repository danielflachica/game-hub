import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
  FaGlobe,
  FaQuestionCircle,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { BsNintendoSwitch } from "react-icons/bs";
import { SiAtari, SiCommodore, SiSega, SiWeb3Dotjs } from "react-icons/si";
import { IoGameControllerSharp } from "react-icons/io5";
import { Platform } from "@/hooks/useGames";
import { HStack, Icon } from "@chakra-ui/react";
import { Tooltip } from "@/components/ui/tooltip";
import { IconType } from "react-icons";

interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    ios: MdPhoneIphone,
    android: FaAndroid,
    mac: FaApple,
    linux: FaLinux,
    xbox: FaXbox,
    nintendo: BsNintendoSwitch,
    atari: SiAtari,
    "commodore-amiga": SiCommodore,
    sega: SiSega,
    "3do": SiWeb3Dotjs,
    "neo-geo": IoGameControllerSharp,
    web: FaGlobe,
  };

  return (
    <HStack marginY={1}>
      {platforms.map((platform) => (
        <Tooltip key={platform.id} content={platform.name} showArrow>
          <Icon
            as={
              iconMap[platform.slug] ? iconMap[platform.slug] : FaQuestionCircle
            }
            color="gray.500"
          />
        </Tooltip>
      ))}
    </HStack>
  );
};

export default PlatformIconList;
