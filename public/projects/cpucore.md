# RISC-V CPU Core (SystemVerilog)

Designed and implemented a pipelined 32-bit RISC-V CPU core in SystemVerilog as part of a university computer architecture course. The core implements the RV32I base integer instruction set, excluding the `fence` instruction, and was required to synthesize for FPGA deployment and pass a suite of integration tests provided as C programs. The design also had to meet a minimum instructions-per-cycle (IPC) target, which encouraged careful pipeline design and hazard handling.

The processor follows a classic five-stage pipeline (fetch, decode, execute, memory, writeback). Verification combined the course test harness with custom programs I wrote to exercise decoding, arithmetic, control flow, and memory operations.

![Simulation waveform](res/img/waveform.png)

The project gave hands-on experience with processor microarchitecture: translating ISA semantics into control and datapath logic, reasoning about pipeline timing, and validating behavior in simulation before hardware bring-up. Working directly with the RISC-V specification— and correlating instruction traces with waveform debug— helped connect high-level software behavior to what actually happens on the machine.
