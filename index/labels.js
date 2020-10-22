var labelsIndex=[["A-HAIR","Relating to the HAIR IR."],["A-LLVM","Area: Code generation parts specific to LLVM. Both correctness bugs and optimization-related issues."],["A-NLL","Area: Non Lexical Lifetimes (NLL)"],["A-allocators","Area: Custom and system allocators"],["A-associated-items","Area: Associated items such as associated types and consts."],["A-async-await","Area: Async & Await"],["A-attributes","Area: #[attributes(..)]"],["A-borrow-checker","Area: The borrow checker"],["A-catch","Area: `do catch { .. }` expressions"],["A-closures","Area: closures (`|args| { .. }`)"],["A-codegen","Area: Code generation"],["A-coercions","Area: implicit and explicit `expr as Type` coercions"],["A-collections","Area: std::collections."],["A-concurrency","Area: Concurrency related issues."],["A-const-eval","Area: constant evaluation (mir interpretation)"],["A-const-fn","Area: const fn foo(..) {..}. Pure functions which can be applied at compile time."],["A-const-generics","Area: const generics (parameters and arguments)"],["A-contributor-roadblock","Area: Makes things more difficult for new contributors to rust itself"],["A-control-flow","Area: Relating to control flow"],["A-cranelift","Things relevant to the [future] cranelift backend"],["A-cross","Area: Cross compilation"],["A-cross-crate-reexports","Area: Documentation that has been re-exported from a different crate"],["A-debuginfo","Area: Debugging information in compiled programs (DWARF, PDB, etc.)"],["A-destructors","Area: destructors (Drop, ..)"],["A-diagnostics","Area: Messages for errors, warnings, and lints"],["A-doc-alias","Area: #[doc(alias)]"],["A-doc-coverage","Area: Calculating how much of a crate has documentation"],["A-doctests","Area: Documentation tests, run by rustdoc"],["A-driver","Area: rustc_driver that ties everything together into the `rustc` compiler"],["A-dst","Area: Dynamically Sized Types"],["A-edition-2018-lints","Area: lints supporting the 2018 edition"],["A-error-codes","Area: Explanation of an error code (--explain)"],["A-error-handling","Area: Error handling"],["A-exhaustiveness-checking","Relating to exhaustiveness / usefulness checking of patterns"],["A-ffi","Area: Foreign Function Interface (FFI)"],["A-floating-point","Area: Floating point numbers and arithmetic"],["A-fmt","Area: std::fmt"],["A-frontend","Area: frontend (errors, parsing and HIR)"],["A-generators","Area: Generators"],["A-github-actions",""],["A-grammar","Area: The grammar of Rust"],["A-hir","Area: the High level Intermediate Representation (HIR)"],["A-impl-trait","Area: impl Trait. Universally / existentially quantified anonymous types with static dispatch."],["A-incr-comp","Area: Incremental compilation"],["A-inference","Area: Type inference"],["A-inline-assembly","Area: inline asm!(..)"],["A-intra-doc-links","Area: Intra-doc links, the ability to link to items in docs by name"],["A-intrinsics","Area: intrinsics"],["A-io","Area: std::io, std::fs and std::net"],["A-iterators","Area: Iterators"],["A-lang-item","Area: lang items"],["A-layout","Area: Memory layout of types"],["A-lazy-normalization","Area: lazy normalization (tracking issue: #60471)"],["A-libtest","Area: #[test] related"],["A-lifetimes","Area: lifetime related"],["A-linkage","Area: linking into static, shared libraries and binaries"],["A-lint","Area: Lints (warnings about flaws in source code) such as unused_mut."],["A-macros","Area: All kinds of macros (custom derive, macro_rules!, proc macros, ..)"],["A-macros-1.2","Issues which affect macros 1.2"],["A-macros-2.0","Area: declarative macros 2.0, https://github.com/rust-lang/rust/issues/39412"],["A-meta","Area: Issues about the rust-lang/rust repository."],["A-metadata","Area: crate metadata"],["A-mir","Area: Mid-level IR (MIR) - https://blog.rust-lang.org/2016/04/19/MIR.html"],["A-mir-opt","Area: MIR optimizations"],["A-mir-opt-inlining","Area: MIR inlining"],["A-mir-opt-nrvo","Fixed by NRVO"],["A-miri","Area: The miri tool"],["A-naked","Area: #[naked], prologue and epilogue-free, functions, https://git.io/vAzzS"],["A-parallel-queries","Area: Parallel query execution"],["A-parser","Area: The parsing of Rust source code to an AST."],["A-patterns","Relating to patterns and pattern matching"],["A-plugin","Area: compiler plugins, doc.rust-lang.org/nightly/unstable-book/language-features/plugin.html"],["A-polymorphization","Area: Polymorphization"],["A-pretty","Area: Pretty printing."],["A-proc-macros","Area: Procedural macros"],["A-query-system","Area: The rustc query system (https://rustc-dev-guide.rust-lang.org/query.html)"],["A-raw-pointers","Area: raw pointers, MaybeUninit, NonNull"],["A-reproducibility","Area: Reproducible / Deterministic builds"],["A-resolve","Area: Path resolution"],["A-result-option","Area: Result and Option combinators"],["A-rls","Area: Rust Language Server (RLS)"],["A-runtime","Area: The standard library's runtime (backtraces, unwinding, stack overflow detection)"],["A-rust-2018-preview","Area: The 2018 edition preview"],["A-rustbuild","Area: Rust's build system (x.py and bootstrap)"],["A-rustdoc-search","Area: Rustdoc's search feature"],["A-rustdoc-themes","Area: themes for HTML pages generated by rustdoc"],["A-rustfmt","Area: Rustfmt"],["A-sanitizers","Area: Sanitizers for correctness and code quality."],["A-save-analysis","Area: saving results of analyses such as inference and borrowck results to a file."],["A-security","Area: Security related issues (example: adress space layout randomization)"],["A-self-profile","Area: Self-profiling feature of the compiler"],["A-simd","Area: SIMD (Single Instruction Multiple Data)"],["A-slice","Area: [T]"],["A-slice-patterns","Area: slice patterns, https://github.com/rust-lang/rust/issues/23121"],["A-specialization","Area: Trait impl specialization"],["A-spurious","Area: Spurious failures in builds (spuriously == for no apparent reason)"],["A-stability","Area: issues related to #[stable] and #[unstable] attributes themselves."],["A-str","Area: str and String"],["A-suggestion-diagnostics","Area: suggestions generated by the compiler applied by cargo fix"],["A-syntaxext","Area: Syntax extensions"],["A-synthetic-impls","Area: Synthetic impls, used by rustdoc to document auto traits and traits with blanket impls"],["A-target-specs","Area: compile-target specifications"],["A-testsuite","Area: The testsuite used to check the correctness of rustc"],["A-thread-locals","Area: Thread local storage (TLS)"],["A-traits","Area: Trait system"],["A-type-based-search","Area: searching rustdoc pages using type signatures"],["A-typesystem","Area: The type system"],["A-unicode","Area: unicode related"],["A-visibility","Area: visibility/privacy modifiers such as `pub`"],["A-zst","Area: Zero-sized types"],["AsyncAwait-Focus","Async-await issues presently being focused on."],["AsyncAwait-OnDeck","Async-await issues prioritized as possible next focus items"],["AsyncAwait-Triaged","Async-await issues that have been triaged during a working group meeting."],["B-RFC-approved","Approved by a merged RFC but not yet implemented."],["B-RFC-implemented","Approved by a merged RFC and implemented."],["B-unstable","Implemented in the nightly compiler and unstable."],["C-bug","Category: This is a bug."],["C-cleanup","Category: PRs that clean code up or issues documenting cleanup."],["C-discussion","Category: Discussion or questions that doesn't represent real issues."],["C-enhancement","Category: An issue proposing an enhancement or a PR with one."],["C-feature-accepted","Category: A feature request that has been accepted pending implementation."],["C-feature-request","Category: A feature request, i.e: not implemented / a PR."],["C-future-compatibility","Category: future compatibility lints"],["C-tracking-issue","Category: A tracking issue for an RFC or an unstable feature."],["D-confusing","Confusing diagnostic error that should be reworked"],["D-crate-version-mismatch","Errors caused be the use of two different crate versions."],["D-edition","Diagnostic error that should account for edition differences"],["D-inconsistent","Inconsistency in formatting, grammar or style between diagnostic messages"],["D-incorrect","A diagnostic that is giving misleading or incorrect information"],["D-invalid-suggestion","A structured suggestion resulting in incorrect code"],["D-newcomer-roadblock","Confusing diagnostic error hard to understand for new users"],["D-papercut","Diagnostic error that needs small tweaks"],["D-terse","A diagnostic that doesn't give enough information about the problem at hand"],["D-verbose","Too much output caused by a single piece of incorrect code"],["E-easy","Call for participation: Experience needed to fix: Easy / not much"],["E-hard","Call for participation: Experience needed to fix: Hard / a lot"],["E-help-wanted","Call for participation: Help is requested to fix this issue."],["E-medium","Call for participation: Experience needed to fix: Medium / intermediate"],["E-mentor","Call for participation: This issue is currently mentored."],["E-needs-bisection","Call for participation: This issue needs a bisection to find the exact PR causing the regression"],["E-needs-mcve","Call for participation: This issue needs a Minimal Complete and Verifiable Example"],["E-needs-mentor","Call for participation: This issue is in need of a mentor."],["E-needs-test","Call for participation: writing correctness tests"],["F-arbitrary_self_types","`#![feature(arbitrary_self_types)]`"],["F-asm","`#![feature(asm)]` (not `llvm_asm`)"],["F-associated_type_bounds","`#![feature(associated_type_bounds)]`"],["F-associated_type_defaults","`#![feature(associated_type_defaults)]`"],["F-async_await","`#![feature(async_await)]`"],["F-async_closures","`#![feature(async_closures)]`"],["F-bindings_after_at","`#![feature(bindings_after_at)]`"],["F-c_unwind","`#![feature(c_unwind)]`"],["F-c_variadic","`#![feature(c_variadic)]`"],["F-cfg_accessible","`#![feature(cfg_accessible)]`"],["F-cfg_version","`#![feature(cfg_version)]`"],["F-coerce_unsized","The `CoerceUnsized` trait"],["F-const_evaluatable_checked","`#![feature(const_evaluatable_checked)]`"],["F-const_expr","Const blocks / const expressions / inline constants / anonymous constants"],["F-const_extern_fn","`#![feature(const_extern_fn)]`"],["F-const_fn","`#![feature(const_fn)]`"],["F-const_generics","`#![feature(const_generics)]`"],["F-const_if_match","`#![feature(const_if_match)]`"],["F-const_in_array_repeat_expressions","`#[feature(const_in_array_repeat_expressions)]`"],["F-const_loop","`#![feature(const_loop)]`"],["F-const_mut_refs","`#![feature(const_mut_refs)]`"],["F-const_trait_bound_opt_out","`#![feature(const_trait_bound_opt_out)]`"],["F-const_trait_impl","`#![feature(const_trait_impl)]`"],["F-custom_test_frameworks","`#![feature(custom_test_frameworks)]`"],["F-decl_macro","`#![feature(decl_macro)]`"],["F-dispatch_from_dyn","`#![feature(dispatch_from_dyn)]`"],["F-dropck_eyepatch","`#![feature(dropck_eyepatch)]`"],["F-exclusive_range_pattern","`#![feature(exclusive_range_pattern)]`"],["F-extern_types","`#![feature(extern_types)]`"],["F-format_implicit_args","implicit arguments for format strings (RFC 2795)"],["F-generators","`#![feature(generators)]`"],["F-generic_associated_types","`#![feature(generic_associated_types)]`"],["F-half_open_range_patterns","`#![feature(half_open_range_patterns)]`"],["F-impl_trait_in_bindings","`#![feature(impl_trait_in_bindings)]`"],["F-isa_attribute","Related to #[instruction_set] attribute introduced by RFC 2867"],["F-label_break_value","`#![feature(label_break_value)]`"],["F-let_chains","`#![feature(let_chains)]`"],["F-marker_trait_attr","`#![feature(marker_trait_attr)]`"],["F-member_constraints","`#[feature(member_constraints)]`"],["F-min_const_generics","Minimal const generics MVP"],["F-move_ref_pattern","`#![feature(move_ref_pattern)]`"],["F-negative_impls","#![feature(negative_impls)]"],["F-never_type","`#![feature(never_type)]`"],["F-non_ascii_idents","`#![feature(non_ascii_idents)]`"],["F-non_exhaustive","`#![feature(non_exhaustive)]`"],["F-object_safe_for_dispatch","`#![feature(object_safe_for_dispatch)]`"],["F-on_unimplemented","Error messages that can be tackled with `#[rustc_on_unimplemented]`"],["F-or_patterns","`#![feature(or_patterns)]`"],["F-param_attrs","`#![feature(param_attrs)]`"],["F-raw_dylib","`#![feature(raw_dylib)]`"],["F-raw_ref_op","`#![feature(raw_ref_op)]`"],["F-re_rebalance_coherence","`#![feature(re_rebalance_coherence)]`"],["F-rustc_attrs","Internal rustc attributes gated on the `#[rustc_attrs]` feature gate."],["F-simd_ffi","`#![feature(simd_ffi)]`"],["F-slice_patterns","`#![feature(slice_patterns)]`"],["F-specialization","`#![feature(specialization)]`"],["F-target_feature_11","target feature 1.1 RFC"],["F-thread_local","`#![feature(thread_local)]`"],["F-track_caller","`#![feature(track_caller)]`"],["F-trait_alias","`#![feature(trait_alias)]`"],["F-trait_upcasting","`#![feature(trait_upcasting)]`"],["F-try_blocks","`#![feature(try_blocks)]`"],["F-type_alias_impl_trait","`#[feature(type_alias_impl_trait)]`"],["F-unboxed_closures","`#![feature(unboxed_closures)]`"],["F-unsafe-block-in-unsafe-fn","RFC #2585"],["F-unsized_locals","`#![feature(unsized_locals)]`"],["F-untagged_unions","`#![feature(untagged_unions)]`"],["I-ICE","Describes an Internal Compilation Error (ICE) or ❄️- a panic bug in the compiler."],["I-compilemem","Problems and improvements with respect to memory usage during compilation."],["I-compiletime","Problems and improvements with respect to compile times."],["I-crash","Compiler crashes, use I-ICE instead when rustc panics with a message saying it is an ICE."],["I-hang","Compiler never terminates, resulting from infinite loops, deadlock, livelock, etc."],["I-heavy","Problems and improvements with respect to binary size of generated code."],["I-monomorphization","Error at monomorphization time"],["I-needs-decision","Issues in need of decision."],["I-nominated","Indicates that an issue has been nominated for discussion during a team meeting."],["I-prioritize","Indicates that prioritization has been requested for this issue"],["I-slow","Problems and improvements with respect to performance of generated code."],["I-unsound 💥","A soundness hole (worst kind of bug), see: https://en.wikipedia.org/wiki/Soundness"],["ICEBreaker-Cleanup-Crew","Helping to \"clean up\" bugs with minimal examples and bisections"],["ICEBreaker-LLVM","Bugs identified for the LLVM ICE-breaker group"],["Libs-Small","Libs issues that are considered \"small\" or self-contained"],["Libs-Tracked","Libs issues that are tracked on the team's project board."],["NLL-complete","Working towards the \"valid code works\" goal"],["NLL-diagnostics","Working torwads the \"diagnostic parity\" goal"],["NLL-fixed-by-NLL","Bugs fixed, but only when NLL is enabled."],["NLL-performant","Working towards the \"performance is good\" goal"],["NLL-polonius","Issues related for using Polonius in the borrow checker"],["NLL-reference","Reference material for NLL"],["NLL-sound","Working towards the \"invalid code does not compile\" goal"],["O-ARM","Target: ARM processors (arm, thumb and AArch64 targets)"],["O-AVR","Target: AVR processors (ATtiny, ATmega, etc.)"],["O-MIPS","Target: MIPS processors"],["O-NVPTX","Target: the NVPTX LLVM backend for running rust on GPUs, https://llvm.org/docs/NVPTXUsage.html"],["O-NixOS","Operating system: NixOS, https://nixos.org/"],["O-PowerPC","Target: PowerPC processors"],["O-SGX","Target: SGX"],["O-SPARC","Target: SPARC processors"],["O-SystemZ","Target: SystemZ processors (s390x)"],["O-UEFI","UEFI"],["O-android","Operating system: Android"],["O-asmjs","Target: asm.js - http://asmjs.org/"],["O-dragonfly","Operating system: DragonFly BSD"],["O-freebsd","Operating system: FreeBSD"],["O-fuchsia","Operating system: Fuchsia"],["O-guix","Operating system: Guix, https://www.gnu.org/software/guix/"],["O-ios","Operating system: iOS"],["O-linux","Operating system: Linux"],["O-macos","Operating system: macOS"],["O-musl","Target: The musl libc"],["O-netbsd","Operating system: NetBSD"],["O-openbsd","Operating system: OpenBSD"],["O-redox","Operating system: Redox, https://www.redox-os.org/"],["O-riscv","Target: RISC-V architecture"],["O-solaris","Operating system: Solaris"],["O-wasm","Target: WASM (WebAssembly), http://webassembly.org/"],["O-windows","Operating system: Windows"],["O-windows-gnu","Toolchain: GNU, Operating system: Windows"],["O-windows-msvc","Toolchain: MSVC, Operating system: Windows"],["O-x32","x32 ABI"],["O-x86","Target: x86 processors"],["O-x86_64","Target: x64 processors"],["P-critical","Critical priority"],["P-high","High priority"],["P-low","Low priority"],["P-medium","Medium priority"],["PG-error-handling","Project Group: Error handling (https://github.com/rust-lang/project-error-handling)"],["PG-portable-simd","Project Group: Portable SIMD (https://github.com/rust-lang/project-portable-simd)"],["S-blocked","Status: marked as blocked ❌ on something else such as an RFC or other implementation work."],["S-blocked-closed","Status: marked as blocked ❌ and closed because resolving the block is expected to take a long time."],["S-inactive","Status: Awaiting completion of ongoing action, intended for slow progress."],["S-inactive-closed","Status: closed due to inactivity."],["S-waiting-on-author","Status: This is awaiting some action (such as code changes or more information) from the author."],["S-waiting-on-bikeshed","Status: Awaiting a decision on trivial things."],["S-waiting-on-bors","Status: Waiting on bors to run and complete tests. Bors will change the label on completion."],["S-waiting-on-crater","Status: Waiting on a crater run to be completed."],["S-waiting-on-fcp","Status: PR is in FCP and is awaiting for FCP to complete."],["S-waiting-on-perf","Status: Waiting on a perf run to be completed."],["S-waiting-on-review","Status: Awaiting review from the assignee but also interested parties."],["S-waiting-on-team","Status: Awaiting decision from the relevant subteam (see the T-<team> label)."],["T-cargo","Relevant to the cargo subteam, which will review and decide on the PR/issue."],["T-community",""],["T-compiler","Relevant to the compiler subteam, which will review and decide on the PR/issue."],["T-core","Relevant to the core team, which will review and decide on the PR/issue."],["T-dev-tools","Relevant to the dev-tools subteam, which will review and decide on the PR/issue."],["T-doc","Relevant to the documentation subteam, which will review and decide on the PR/issue."],["T-infra","Relevant to the infrastructure subteam, which will review and decide on the PR/issue."],["T-lang","Relevant to the language subteam, which will review and decide on the PR/issue."],["T-libs","Relevant to the libraries subteam, which will review and decide on the PR/issue."],["T-release","Relevant to the release subteam, which will review and decide on the PR/issue."],["T-rustdoc","Relevant to the rustdoc subteam, which will review and decide on the PR/issue."],["WG-codegen","Working Group: Codegen (Runtime perf and code size)"],["WG-compiler-errors","Working group: compiler errors"],["WG-compiler-front","Working group: front end (Parser, HIR)"],["WG-compiler-middle","Working group: Middle end; Everything between frontend (parser, HIR) and backend (trans, llvm)"],["WG-compiler-parallel","Working group working on parallelizing the compiler"],["WG-compiler-performance","Working group: Compiler Performance"]];