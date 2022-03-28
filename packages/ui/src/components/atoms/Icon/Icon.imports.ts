import { AiOutlineLoading } from "react-icons/ai";
import { GiCutDiamond, GiSpeedometer } from "react-icons/gi";
import { HiUsers } from "react-icons/hi";
import { IoDocumentTextOutline, IoHelp } from "react-icons/io5";
import {
    MdAdd,
    MdCancelPresentation,
    MdCardGiftcard,
    MdCheck,
    MdClose,
    MdContentCopy,
    MdMenu,
    MdOutlineAirplaneTicket,
    MdOutlineCloudDone,
    MdOutlineCloudUpload,
    MdOutlineList,
    MdOutlineModeEditOutline,
    MdOutlinePersonPin,
    MdOutlinePhoto,
    MdOutlineShield,
    MdRemove,
    MdTimerOff,
} from "react-icons/md";
import { RiHome2Fill, RiHome2Line, RiShareForwardFill } from "react-icons/ri";

export const icons = {
    home: RiHome2Line,
    homeFilled: RiHome2Fill,
    diamond: GiCutDiamond,
    share: RiShareForwardFill,
    edit: MdOutlineModeEditOutline,
    copy: MdContentCopy,
    check: MdCheck,
    cloud: MdOutlineCloudUpload,
    cloudSuccess: MdOutlineCloudDone,
    help: IoHelp,
    plus: MdAdd,
    minus: MdRemove,
    shield: MdOutlineShield,
    document: IoDocumentTextOutline,
    airplaneTicket: MdOutlineAirplaneTicket,
    time: MdTimerOff,
    giftcard: MdCardGiftcard,
    list: MdOutlineList,
    speed: GiSpeedometer,
    person: MdOutlinePersonPin,
    persons: HiUsers,
    photo: MdOutlinePhoto,
    cross: MdClose,
    temp: MdCancelPresentation,
    hamburger: MdMenu,
    loading: AiOutlineLoading,
};
