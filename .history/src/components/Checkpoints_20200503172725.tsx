import React, {
  useRef,
  useEffect,
  DOMElement,
  useState,
  useCallback,
  createContext,
  useContext,
} from "react";
import reduce from "lodash/reduce";
import inRange from "lodash/inRange";

import styled from "@emotion/styled";
import { useScroll } from "react-use-gesture";
import Base from "./Base";

type BreakType = { id?: string; offset?: number };

const Checkpoints = styled(Base)``;

const useAnchors = ({
  onCheckpoint,
}: {
  onCheckpoint: (b: BreakType) => void;
}) => {
  const [selectedBreakpoint, setSelectedBreakpoint] = useState({});
  const breakpoints = useRef<BreakType[]>([]);
  const selectedBreak = useRef<BreakType>({});
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (ref.current) {
      const anchorNodes = ref.current.querySelectorAll("[id]");
      anchorNodes.forEach((node) => {
        breakpoints.current.push({ id: node.id, offset: node.offsetTop });
      });
      selectedBreak.current = breakpoints.current[0];
    }
  }, [ref.current, breakpoints.current]);

  const updateBreakpoint = useCallback((y) => {
    const selected = breakpoints.current.find((breakpoint, i) => {
      const nextBreak = breakpoints.current[i + 1];
      return nextBreak
        ? inRange(y, breakpoint.offset || 0, nextBreak.offset)
        : (breakpoint.offset || 0) <= y;
    });
    if (selected && selected.id !== selectedBreak.current.id) {
      selectedBreak.current.id = selected?.id;
      selectedBreak.current.offset = selected?.offset;
      onCheckpoint && onCheckpoint(selected);
    }
  }, []);
  return { ref, breakpoints, selectedBreakpoint, updateBreakpoint };
};

const Context = createContext<{ state?: any; setState?: Function }>({});

const useCheckpoints = () => {
  const { state, setState } = useContext(Context);
  return { state, setState };
};

function CheckpointMonitor({ onChange, ...props }: any) {
  const { setState } = useCheckpoints();
  const { ref, updateBreakpoint } = useAnchors({
    onCheckpoint: (b) => setState && setState({ active: b }),
  });

  const bind = useScroll((state) => updateBreakpoint(state.offset[1]));

  return <Checkpoints ref={ref} {...props} {...bind()} />;
}
export default function CheckpointsProvider(props: any) {
  const [state, setState] = useState({});

  return (
    <Context.Provider value={{ state, setState }}>
      <CheckpointMonitor {...props} />
    </Context.Provider>
  );
}
