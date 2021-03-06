import React, {
  useRef,
  useEffect,
  useState,
  useCallback,
  createContext,
  useContext,
} from "react";
import inRange from "lodash/inRange";

import styled from "@emotion/styled";
import { useScroll } from "react-use-gesture";
import Base from "./Layout/Base";

type BreakType = { id?: string; offset?: number };

const Checkpoints = styled(Base)``;

const Context = createContext<{ state?: any; setState?: Function }>({});

export const useCheckpoints = () => useContext(Context);

function CheckpointMonitor({ onChange, ...props }: any) {
  const { setState } = useCheckpoints();
  const breakpoints = useRef<BreakType[]>([]);
  const selectedBreak = useRef<BreakType>({});
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (ref.current) {
      const anchorNodes: NodeListOf<HTMLElement> = ref.current.querySelectorAll(
        "[id]"
      );
      anchorNodes.forEach((node) => {
        breakpoints.current.push({ id: node.id, offset: node.offsetTop });
      });
      selectedBreak.current = breakpoints.current[0];
    }
  }, [ref.current, breakpoints.current]);

  const updateBreakpoint = useCallback((y) => {
    const selected: any = breakpoints.current.find((breakpoint: any, i) => {
      console.log(i, i + 1);
      const nextBreak = breakpoints.current[i + 1];

      return i < breakpoints.current.length - 1
        ? inRange(y, breakpoint.offset, nextBreak.offset)
        : breakpoint.offset <= y;
    });

    if (selected.id !== selectedBreak.current.id) {
      selectedBreak.current.id = selected?.id;
      selectedBreak.current.offset = selected?.offset;
      setState && setState({ active: selected.id });
    }
  }, []);
  const bind = useScroll((state) => updateBreakpoint(state.offset[1]));

  return <Checkpoints ref={ref} {...props} {...bind()} />;
}
export default function CheckpointsProvider(props: any) {
  const [state, setState] = useState({ active: undefined });

  return (
    <Context.Provider value={{ state, setState }}>
      <CheckpointMonitor {...props} />
    </Context.Provider>
  );
}
