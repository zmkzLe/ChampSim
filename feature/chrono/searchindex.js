Search.setIndex({"docnames": ["src/Creating-a-configuration-file", "src/Legacy-modules", "src/Modules", "src/index"], "filenames": ["src/Creating-a-configuration-file.rst", "src/Legacy-modules.rst", "src/Modules.rst", "src/index.rst"], "titles": ["Creating a Configuration File", "The Legacy ChampSim Module System", "The ChampSim Module System", "Welcome to the ChampSim wiki!"], "terms": {"The": [0, 3], "i": [0, 1, 2], "central": 0, "fixtur": 0, "champsim": 0, "build": 0, "an": [0, 1, 2, 3], "exampl": [0, 1, 2], "champsim_config": 0, "json": 0, "given": [0, 3], "root": 0, "repositori": [0, 3], "larg": 0, "unwieldi": 0, "like": [0, 3], "much": [0, 3], "smaller": 0, "thi": [0, 1, 2, 3], "page": 0, "walk": 0, "you": [0, 1, 2, 3], "through": [0, 3], "mani": [0, 1], "featur": 0, "input": 0, "script": 0, "below": [0, 3], "config": 0, "sh": 0, "my_config": 0, "In": 0, "fact": 0, "entir": 0, "option": 0, "Not": 0, "specifi": 0, "ani": [0, 2, 3], "default": [0, 1, 2], "all": [0, 1, 2], "ar": [0, 1, 2, 3], "we": [0, 3], "can": [0, 1, 2, 3], "start": [0, 3], "most": 0, "trivial": 0, "would": 0, "But": 0, "frequent": 0, "us": [0, 1, 2, 3], "let": [0, 3], "": [0, 2], "chang": [0, 3], "branch": [0, 3], "predictor": [0, 3], "legal": 0, "valu": [0, 1, 2], "branch_predictor": [0, 2], "kei": 0, "directori": [0, 1], "name": [0, 1], "under": 0, "valid": 0, "path": [0, 1], "same": [0, 1, 2], "true": [0, 1, 2], "btb": [0, 1, 2], "both": 0, "prefetch": [0, 3], "replac": [0, 3], "polici": [0, 3], "perceptron": 0, "instead": 0, "take": [0, 3], "further": [0, 3], "thing": 0, "about": 0, "our": [0, 3], "singl": 0, "rob_siz": 0, "226": 0, "lq_size": 0, "90": 0, "sq_size": 0, "85": 0, "fetch_width": 0, "6": 0, "decode_width": 0, "lq_width": 0, "2": 0, "sq_width": 0, "1": 0, "decode_lat": 0, "3": 0, "execute_lat": 0, "each": [0, 1, 2], "someth": [0, 3], "next": 0, "ll": [0, 3], "some": [0, 3], "begin": [0, 1, 2, 3], "l1": 0, "data": 0, "its": [0, 3], "size": [0, 3], "base": [0, 3], "block": [0, 1, 2], "number": 0, "set": [0, 1, 2, 3], "wai": [0, 1, 2], "follow": [0, 1, 2], "64": 0, "kib": 0, "block_siz": 0, "l1d": 0, "256": 0, "4": 0, "note": 0, "here": [0, 1], "clariti": 0, "do": [0, 2, 3], "noth": 0, "lru": 0, "thei": 0, "too": 0, "next_lin": 0, "my": 0, "repl": 0, "ident": 0, "so": [0, 1, 3], "far": 0, "ve": 0, "onli": [0, 3], "handl": 0, "case": 0, "simul": [0, 1, 2, 3], "enabl": [0, 1, 3], "num_cor": 0, "two": 0, "combin": 0, "other": [0, 1, 2, 3], "specif": [0, 3], "have": [0, 3], "made": 0, "190": 0, "drrip": 0, "support": [0, 3], "varieti": [0, 3], "includ": [0, 1, 2, 3], "homogen": 0, "For": [0, 3], "could": 0, "differ": [0, 3], "rob": 0, "list": [0, 2], "ooo_cpu": 0, "120": 0, "240": 0, "object": [0, 2], "one": [0, 2, 3], "discuss": 0, "bimod": 0, "gshare": 0, "70": 0, "also": 0, "These": 0, "refer": 0, "ha": [0, 1, 2, 3], "distinct": 0, "cachea": 0, "cacheb": 0, "srrip": 0, "make": [0, 3], "everi": 0, "attempt": 0, "assign": 0, "mai": [0, 1, 2, 3], "abl": [0, 3], "0": [0, 1, 2], "attach": 0, "llca": 0, "llcb": 0, "llc": 0, "l2c": [0, 1], "lower_level": 0, "howev": 0, "need": [0, 1, 2, 3], "addit": 0, "paramet": [0, 1, 2], "8": 0, "l4c": 0, "previou": [1, 2], "version": 1, "exist": 1, "publish": 1, "artifact": 1, "document": 1, "new": [1, 3], "work": [1, 3], "should": [1, 2, 3], "updat": 1, "ad": 1, "empti": [1, 2], "file": [1, 3], "__legacy__": 1, "sourc": [1, 3], "configur": [1, 2, 3], "four": [1, 2], "kind": [1, 2], "direct": [1, 2], "cach": [1, 2, 3], "implement": [1, 2], "hook": [1, 2], "function": [1, 2], "must": [1, 2], "compil": [1, 3], "fail": [1, 2], "A": [1, 2, 3], "three": [1, 2, 3], "void": [1, 2], "o3_cpu": [1, 2], "initialize_branch_predictor": [1, 2], "call": [1, 2, 3], "when": [1, 2, 3], "core": [1, 2, 3], "initi": [1, 2], "element": [1, 2], "dynam": [1, 2], "structur": [1, 2], "std": [1, 2], "vector": [1, 2], "map": [1, 2], "uint8_t": [1, 2], "predict_branch": [1, 2], "uint64_t": [1, 2], "ip": [1, 2], "predicted_target": [1, 2], "always_taken": [1, 2], "branch_typ": [1, 2], "predict": [1, 2], "pass": [1, 2], "instruct": [1, 2, 3], "pointer": [1, 2], "directli": [1, 2], "from": [1, 2, 3], "incorrect": [1, 2], "boolean": [1, 2], "nonzero": [1, 2], "determin": [1, 2], "alwai": [1, 2], "taken": [1, 2], "One": [1, 2], "branch_direct_jump": [1, 2], "non": [1, 2, 3], "uncondit": [1, 2], "whose": [1, 2], "encod": [1, 2], "branch_indirect": [1, 2], "indirect": [1, 2], "store": [1, 2, 3], "regist": [1, 2], "branch_condit": [1, 2], "condit": [1, 2], "branch_direct_cal": [1, 2], "procedur": [1, 2], "branch_indirect_cal": [1, 2], "branch_return": [1, 2], "return": [1, 2], "branch_oth": [1, 2], "If": [1, 2], "type": [1, 2], "cannot": [1, 2], "last_branch_result": [1, 2], "branch_target": [1, 2], "resolv": [1, 2], "except": [1, 2], "last": [1, 2], "guarante": [1, 2], "correct": [1, 2], "initialize_btb": [1, 2], "pair": [1, 2], "bool": [1, 2], "btb_predict": [1, 2], "contain": [1, 2, 3], "address": [1, 2], "describ": [1, 2], "known": [1, 2], "e": [1, 2], "g": [1, 2], "update_btb": [1, 2], "wa": [1, 2, 3], "five": [1, 2], "six": [1, 2], "prefetcher_initi": [1, 2], "uint32_t": [1, 2], "prefetcher_cache_oper": [1, 2], "addr": [1, 2], "cache_hit": [1, 2], "useful_prefetch": [1, 2], "metadata_in": [1, 2], "tag": [1, 2, 3], "check": [1, 2], "packet": [1, 2], "first": [1, 2, 3], "level": [1, 2, 3], "offset": [1, 2], "bit": [1, 2], "otherwis": [1, 2], "zero": [1, 2], "virtual_prefetch": [1, 2], "virtual": [1, 2], "physic": [1, 2], "demand": [1, 2], "anoth": [1, 2], "hit": [1, 2], "prior": [1, 2], "result": [1, 3], "static_cast": 1, "underlying_type_t": 1, "access_typ": [1, 2], "v": 1, "load": [1, 2, 3], "rfo": [1, 2], "write": [1, 2], "translat": [1, 2], "metadata": [1, 2], "carri": [1, 2], "along": [1, 2], "alongsid": [1, 2], "prefetcher_cache_fil": [1, 2], "uint32_wai": [1, 2], "miss": [1, 2], "fill": [1, 2], "occur": [1, 2], "num_wai": [1, 2], "bypass": [1, 2], "prefetcher_cycle_oper": [1, 2], "cycl": [1, 2], "after": [1, 2], "oper": [1, 2, 3], "complet": [1, 2], "prefetcher_final_stat": [1, 2], "end": [1, 2, 3], "print": [1, 2], "statist": [1, 2], "prefetcher_branch_oper": [1, 2], "initialize_replac": [1, 2], "find_victim": [1, 2], "triggering_cpu": [1, 2], "instr_id": [1, 2], "const": [1, 2], "current_set": [1, 2], "index": [1, 2], "count": [1, 2], "examin": [1, 2], "program": [1, 2, 3], "order": [1, 2, 3], "request": [1, 2, 3], "being": [1, 2], "access": [1, 2], "evict": [1, 2], "indic": [1, 2], "update_replacement_st": [1, 2], "victim_addr": [1, 2], "replacement_final_stat": [1, 2], "c": [2, 3], "inherit": 2, "class": [2, 3], "construct": 2, "Such": 2, "constructor": 2, "superclass": 2, "my_pref": 2, "public": 2, "explicit": 2, "your": [2, 3], "bodi": 2, "member": 2, "overload": 2, "them": 2, "select": 2, "candid": 2, "fals": 2, "open": 3, "trace": 3, "maintain": 3, "texa": 3, "m": 3, "univers": 3, "comput": 3, "architectur": 3, "commun": 3, "origin": 3, "develop": 3, "provid": 3, "platform": 3, "microarchitectur": 3, "competit": 3, "dpc3": 3, "dpc2": 3, "crc2": 3, "ipc1": 3, "etc": 3, "sinc": 3, "been": 3, "multipl": 3, "state": 3, "art": 3, "encourag": 3, "read": 3, "see": 3, "right": 3, "research": 3, "project": 3, "modul": 3, "system": 3, "target": 3, "buffer": 3, "memori": 3, "creat": 3, "multi": 3, "heterogen": 3, "legaci": 3, "ultim": 3, "design": 3, "philosophi": 3, "environ": 3, "where": 3, "architect": 3, "realist": 3, "perform": 3, "signific": 3, "within": 3, "month": 3, "out": 3, "box": 3, "explor": 3, "quickli": 3, "prototyp": 3, "manag": 3, "idea": 3, "With": 3, "mind": 3, "toward": 3, "accur": 3, "execut": 3, "model": 3, "without": 3, "overhead": 3, "larger": 3, "layer": 3, "There": 3, "readi": 3, "avail": 3, "onlin": 3, "cvp": 3, "get": 3, "sum": 3, "up": 3, "main": 3, "principl": 3, "low": 3, "startup": 3, "time": 3, "user": 3, "meaning": 3, "littl": 3, "knowledg": 3, "requir": 3, "entri": 3, "comprehens": 3, "scheme": 3, "flexibl": 3, "enough": 3, "commod": 3, "devic": 3, "fast": 3, "deeper": 3, "understand": 3, "modular": 3, "interchang": 3, "piec": 3, "lead": 3, "divers": 3, "ideal": 3, "relat": 3, "o": 3, "interact": 3, "modif": 3, "mean": 3, "instrument": 3, "tool": 3, "pin": 3, "dynamorio": 3, "repres": 3, "processor": 3, "doe": 3, "interfac": 3, "full": 3, "mode": 3, "current": 3, "asid": 3, "fulli": 3, "flat": 3, "latenc": 3, "consum": 3, "resourc": 3, "front": 3, "perfect": 3, "ongo": 3, "while": 3, "improv": 3, "gener": 3, "activ": 3, "u": 3, "awar": 3, "think": 3, "even": 3, "better": 3, "submit": 3, "pull": 3, "help": 3, "hierarchi": 3, "queue": 3, "associ": 3, "interconnect": 3, "between": 3, "aggress": 3, "decoupl": 3, "frontend": 3, "compon": 3, "extend": 3, "dram": 3, "why": 3, "faster": 3, "than": 3, "allow": 3, "student": 3, "jump": 3, "review": 3, "easier": 3, "collabor": 3, "industri": 3, "opcod": 3, "inform": 3, "imposs": 3, "revers": 3, "engin": 3, "sensit": 3, "remov": 3, "random": 3, "fuzz": 3, "disrupt": 3, "overal": 3, "behavior": 3, "applic": 3, "easi": 3, "distribut": 3, "classroom": 3, "evalu": 3, "championship": 3, "concept": 3, "grown": 3, "educ": 3, "want": 3, "contribut": 3, "how": 3, "re": 3, "glad": 3, "ask": 3, "look": 3, "issu": 3, "add": 3, "done": 3, "merg": 3, "cite": 3, "now": 3, "pleas": 3, "arxiv": 3, "paper": 3, "http": 3, "org": 3, "ab": 3, "2210": 3, "14324": 3}, "objects": {"": [[2, 0, 1, "_CPPv414btb_prediction8uint64_t", "btb_prediction"], [2, 0, 1, "_CPPv414btb_prediction8uint64_t7uint8_t", "btb_prediction"], [2, 1, 1, "_CPPv414btb_prediction8uint64_t7uint8_t", "btb_prediction::branch_type"], [2, 1, 1, "_CPPv414btb_prediction8uint64_t", "btb_prediction::ip"], [2, 1, 1, "_CPPv414btb_prediction8uint64_t7uint8_t", "btb_prediction::ip"], [2, 0, 1, "_CPPv411find_victim8uint32_t8uint64_t8uint32_tPK5BLOCK8uint64_t8uint64_t11access_type", "find_victim"], [2, 0, 1, "_CPPv411find_victim8uint32_t8uint64_t8uint32_tPK5BLOCK8uint64_t8uint64_t8uint32_t", "find_victim"], [2, 1, 1, "_CPPv411find_victim8uint32_t8uint64_t8uint32_tPK5BLOCK8uint64_t8uint64_t11access_type", "find_victim::addr"], [2, 1, 1, "_CPPv411find_victim8uint32_t8uint64_t8uint32_tPK5BLOCK8uint64_t8uint64_t8uint32_t", "find_victim::addr"], [2, 1, 1, "_CPPv411find_victim8uint32_t8uint64_t8uint32_tPK5BLOCK8uint64_t8uint64_t11access_type", "find_victim::current_set"], [2, 1, 1, "_CPPv411find_victim8uint32_t8uint64_t8uint32_tPK5BLOCK8uint64_t8uint64_t8uint32_t", "find_victim::current_set"], [2, 1, 1, "_CPPv411find_victim8uint32_t8uint64_t8uint32_tPK5BLOCK8uint64_t8uint64_t11access_type", "find_victim::instr_id"], [2, 1, 1, "_CPPv411find_victim8uint32_t8uint64_t8uint32_tPK5BLOCK8uint64_t8uint64_t8uint32_t", "find_victim::instr_id"], [2, 1, 1, "_CPPv411find_victim8uint32_t8uint64_t8uint32_tPK5BLOCK8uint64_t8uint64_t11access_type", "find_victim::ip"], [2, 1, 1, "_CPPv411find_victim8uint32_t8uint64_t8uint32_tPK5BLOCK8uint64_t8uint64_t8uint32_t", "find_victim::ip"], [2, 1, 1, "_CPPv411find_victim8uint32_t8uint64_t8uint32_tPK5BLOCK8uint64_t8uint64_t11access_type", "find_victim::set"], [2, 1, 1, "_CPPv411find_victim8uint32_t8uint64_t8uint32_tPK5BLOCK8uint64_t8uint64_t8uint32_t", "find_victim::set"], [2, 1, 1, "_CPPv411find_victim8uint32_t8uint64_t8uint32_tPK5BLOCK8uint64_t8uint64_t11access_type", "find_victim::triggering_cpu"], [2, 1, 1, "_CPPv411find_victim8uint32_t8uint64_t8uint32_tPK5BLOCK8uint64_t8uint64_t8uint32_t", "find_victim::triggering_cpu"], [2, 1, 1, "_CPPv411find_victim8uint32_t8uint64_t8uint32_tPK5BLOCK8uint64_t8uint64_t11access_type", "find_victim::type"], [2, 1, 1, "_CPPv411find_victim8uint32_t8uint64_t8uint32_tPK5BLOCK8uint64_t8uint64_t8uint32_t", "find_victim::type"], [2, 0, 1, "_CPPv427initialize_branch_predictorv", "initialize_branch_predictor"], [2, 0, 1, "_CPPv414initialize_btbv", "initialize_btb"], [2, 0, 1, "_CPPv422initialize_replacementv", "initialize_replacement"], [2, 0, 1, "_CPPv418last_branch_result8uint64_t8uint64_t7uint8_t7uint8_t", "last_branch_result"], [2, 1, 1, "_CPPv418last_branch_result8uint64_t8uint64_t7uint8_t7uint8_t", "last_branch_result::branch_target"], [2, 1, 1, "_CPPv418last_branch_result8uint64_t8uint64_t7uint8_t7uint8_t", "last_branch_result::branch_type"], [2, 1, 1, "_CPPv418last_branch_result8uint64_t8uint64_t7uint8_t7uint8_t", "last_branch_result::ip"], [2, 1, 1, "_CPPv418last_branch_result8uint64_t8uint64_t7uint8_t7uint8_t", "last_branch_result::taken"], [2, 0, 1, "_CPPv414predict_branch8uint64_t", "predict_branch"], [2, 0, 1, "_CPPv414predict_branch8uint64_t8uint64_tb7uint8_t", "predict_branch"], [2, 1, 1, "_CPPv414predict_branch8uint64_t8uint64_tb7uint8_t", "predict_branch::always_taken"], [2, 1, 1, "_CPPv414predict_branch8uint64_t8uint64_tb7uint8_t", "predict_branch::branch_type"], [2, 1, 1, "_CPPv414predict_branch8uint64_t", "predict_branch::ip"], [2, 1, 1, "_CPPv414predict_branch8uint64_t8uint64_tb7uint8_t", "predict_branch::ip"], [2, 1, 1, "_CPPv414predict_branch8uint64_t8uint64_tb7uint8_t", "predict_branch::predicted_target"], [2, 0, 1, "_CPPv425prefetcher_branch_operate8uint64_t7uint8_t8uint64_t", "prefetcher_branch_operate"], [2, 1, 1, "_CPPv425prefetcher_branch_operate8uint64_t7uint8_t8uint64_t", "prefetcher_branch_operate::branch_target"], [2, 1, 1, "_CPPv425prefetcher_branch_operate8uint64_t7uint8_t8uint64_t", "prefetcher_branch_operate::branch_type"], [2, 1, 1, "_CPPv425prefetcher_branch_operate8uint64_t7uint8_t8uint64_t", "prefetcher_branch_operate::ip"], [2, 0, 1, "_CPPv421prefetcher_cache_fill8uint64_t8uint32_t10uint32_way7uint8_t8uint32_t", "prefetcher_cache_fill"], [2, 1, 1, "_CPPv421prefetcher_cache_fill8uint64_t8uint32_t10uint32_way7uint8_t8uint32_t", "prefetcher_cache_fill::addr"], [2, 1, 1, "_CPPv421prefetcher_cache_fill8uint64_t8uint32_t10uint32_way7uint8_t8uint32_t", "prefetcher_cache_fill::metadata_in"], [2, 1, 1, "_CPPv421prefetcher_cache_fill8uint64_t8uint32_t10uint32_way7uint8_t8uint32_t", "prefetcher_cache_fill::prefetch"], [2, 1, 1, "_CPPv421prefetcher_cache_fill8uint64_t8uint32_t10uint32_way7uint8_t8uint32_t", "prefetcher_cache_fill::set"], [2, 0, 1, "_CPPv424prefetcher_cache_operate8uint64_t8uint64_tb7uint8_t8uint32_t", "prefetcher_cache_operate"], [2, 0, 1, "_CPPv424prefetcher_cache_operate8uint64_t8uint64_tbb11access_type8uint32_t", "prefetcher_cache_operate"], [2, 0, 1, "_CPPv424prefetcher_cache_operate8uint64_t8uint64_tbb7uint8_t8uint32_t", "prefetcher_cache_operate"], [2, 1, 1, "_CPPv424prefetcher_cache_operate8uint64_t8uint64_tb7uint8_t8uint32_t", "prefetcher_cache_operate::addr"], [2, 1, 1, "_CPPv424prefetcher_cache_operate8uint64_t8uint64_tbb11access_type8uint32_t", "prefetcher_cache_operate::addr"], [2, 1, 1, "_CPPv424prefetcher_cache_operate8uint64_t8uint64_tbb7uint8_t8uint32_t", "prefetcher_cache_operate::addr"], [2, 1, 1, "_CPPv424prefetcher_cache_operate8uint64_t8uint64_tb7uint8_t8uint32_t", "prefetcher_cache_operate::cache_hit"], [2, 1, 1, "_CPPv424prefetcher_cache_operate8uint64_t8uint64_tbb11access_type8uint32_t", "prefetcher_cache_operate::cache_hit"], [2, 1, 1, "_CPPv424prefetcher_cache_operate8uint64_t8uint64_tbb7uint8_t8uint32_t", "prefetcher_cache_operate::cache_hit"], [2, 1, 1, "_CPPv424prefetcher_cache_operate8uint64_t8uint64_tb7uint8_t8uint32_t", "prefetcher_cache_operate::ip"], [2, 1, 1, "_CPPv424prefetcher_cache_operate8uint64_t8uint64_tbb11access_type8uint32_t", "prefetcher_cache_operate::ip"], [2, 1, 1, "_CPPv424prefetcher_cache_operate8uint64_t8uint64_tbb7uint8_t8uint32_t", "prefetcher_cache_operate::ip"], [2, 1, 1, "_CPPv424prefetcher_cache_operate8uint64_t8uint64_tb7uint8_t8uint32_t", "prefetcher_cache_operate::metadata_in"], [2, 1, 1, "_CPPv424prefetcher_cache_operate8uint64_t8uint64_tbb11access_type8uint32_t", "prefetcher_cache_operate::metadata_in"], [2, 1, 1, "_CPPv424prefetcher_cache_operate8uint64_t8uint64_tbb7uint8_t8uint32_t", "prefetcher_cache_operate::metadata_in"], [2, 1, 1, "_CPPv424prefetcher_cache_operate8uint64_t8uint64_tb7uint8_t8uint32_t", "prefetcher_cache_operate::type"], [2, 1, 1, "_CPPv424prefetcher_cache_operate8uint64_t8uint64_tbb11access_type8uint32_t", "prefetcher_cache_operate::type"], [2, 1, 1, "_CPPv424prefetcher_cache_operate8uint64_t8uint64_tbb7uint8_t8uint32_t", "prefetcher_cache_operate::type"], [2, 1, 1, "_CPPv424prefetcher_cache_operate8uint64_t8uint64_tbb11access_type8uint32_t", "prefetcher_cache_operate::useful_prefetch"], [2, 1, 1, "_CPPv424prefetcher_cache_operate8uint64_t8uint64_tbb7uint8_t8uint32_t", "prefetcher_cache_operate::useful_prefetch"], [2, 0, 1, "_CPPv424prefetcher_cycle_operatev", "prefetcher_cycle_operate"], [2, 0, 1, "_CPPv422prefetcher_final_statsv", "prefetcher_final_stats"], [2, 0, 1, "_CPPv421prefetcher_initializev", "prefetcher_initialize"], [2, 0, 1, "_CPPv423replacement_final_statsv", "replacement_final_stats"], [2, 0, 1, "_CPPv410update_btb8uint64_t8uint64_t7uint8_t7uint8_t", "update_btb"], [2, 1, 1, "_CPPv410update_btb8uint64_t8uint64_t7uint8_t7uint8_t", "update_btb::branch_target"], [2, 1, 1, "_CPPv410update_btb8uint64_t8uint64_t7uint8_t7uint8_t", "update_btb::branch_type"], [2, 1, 1, "_CPPv410update_btb8uint64_t8uint64_t7uint8_t7uint8_t", "update_btb::ip"], [2, 1, 1, "_CPPv410update_btb8uint64_t8uint64_t7uint8_t7uint8_t", "update_btb::taken"], [2, 0, 1, "_CPPv424update_replacement_state8uint32_t8uint32_t8uint32_t8uint64_t8uint64_t8uint64_t7uint8_t", "update_replacement_state"], [2, 1, 1, "_CPPv424update_replacement_state8uint32_t8uint32_t8uint32_t8uint64_t8uint64_t8uint64_t7uint8_t", "update_replacement_state::addr"], [2, 1, 1, "_CPPv424update_replacement_state8uint32_t8uint32_t8uint32_t8uint64_t8uint64_t8uint64_t7uint8_t", "update_replacement_state::hit"], [2, 1, 1, "_CPPv424update_replacement_state8uint32_t8uint32_t8uint32_t8uint64_t8uint64_t8uint64_t7uint8_t", "update_replacement_state::ip"], [2, 1, 1, "_CPPv424update_replacement_state8uint32_t8uint32_t8uint32_t8uint64_t8uint64_t8uint64_t7uint8_t", "update_replacement_state::set"], [2, 1, 1, "_CPPv424update_replacement_state8uint32_t8uint32_t8uint32_t8uint64_t8uint64_t8uint64_t7uint8_t", "update_replacement_state::triggering_cpu"], [2, 1, 1, "_CPPv424update_replacement_state8uint32_t8uint32_t8uint32_t8uint64_t8uint64_t8uint64_t7uint8_t", "update_replacement_state::victim_addr"], [2, 1, 1, "_CPPv424update_replacement_state8uint32_t8uint32_t8uint32_t8uint64_t8uint64_t8uint64_t7uint8_t", "update_replacement_state::way"]]}, "objtypes": {"0": "cpp:function", "1": "cpp:functionParam"}, "objnames": {"0": ["cpp", "function", "C++ function"], "1": ["cpp", "functionParam", "C++ function parameter"]}, "titleterms": {"creat": 0, "configur": 0, "file": 0, "your": 0, "first": 0, "cach": 0, "multi": 0, "core": 0, "heterogen": 0, "system": [0, 1, 2], "The": [1, 2], "legaci": 1, "champsim": [1, 2, 3], "modul": [1, 2], "branch": [1, 2], "predictor": [1, 2], "target": [1, 2], "buffer": [1, 2], "memori": [1, 2], "prefetch": [1, 2], "replac": [1, 2], "polici": [1, 2], "welcom": 3, "wiki": 3, "content": 3, "": 3, "goal": 3, "what": 3, "i": 3, "featur": 3, "faq": 3}, "envversion": {"sphinx.domains.c": 3, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 9, "sphinx.domains.index": 1, "sphinx.domains.javascript": 3, "sphinx.domains.math": 2, "sphinx.domains.python": 4, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx": 60}, "alltitles": {"Creating a Configuration File": [[0, "creating-a-configuration-file"]], "Your first configuration file": [[0, "your-first-configuration-file"]], "Cache Configuration": [[0, "cache-configuration"]], "Multi-core configurations": [[0, "multi-core-configurations"]], "Heterogeneous systems": [[0, "heterogeneous-systems"]], "The Legacy ChampSim Module System": [[1, "the-legacy-champsim-module-system"]], "Branch Predictors": [[1, "branch-predictors"], [2, "branch-predictors"]], "Branch Target Buffers": [[1, "branch-target-buffers"], [2, "branch-target-buffers"]], "Memory Prefetchers": [[1, "memory-prefetchers"], [2, "memory-prefetchers"]], "Replacement Policies": [[1, "replacement-policies"], [2, "replacement-policies"]], "The ChampSim Module System": [[2, "the-champsim-module-system"]], "Welcome to the ChampSim wiki!": [[3, "welcome-to-the-champsim-wiki"]], "Contents:": [[3, null]], "ChampSim\u2019s Goal": [[3, "champsim-s-goal"]], "What ChampSim is": [[3, "what-champsim-is"]], "What ChampSim is not": [[3, "what-champsim-is-not"]], "ChampSim Features": [[3, "champsim-features"]], "FAQ": [[3, "faq"]]}, "indexentries": {"btb_prediction (c++ function)": [[2, "_CPPv414btb_prediction8uint64_t"], [2, "_CPPv414btb_prediction8uint64_t7uint8_t"]], "find_victim (c++ function)": [[2, "_CPPv411find_victim8uint32_t8uint64_t8uint32_tPK5BLOCK8uint64_t8uint64_t11access_type"], [2, "_CPPv411find_victim8uint32_t8uint64_t8uint32_tPK5BLOCK8uint64_t8uint64_t8uint32_t"]], "initialize_branch_predictor (c++ function)": [[2, "_CPPv427initialize_branch_predictorv"]], "initialize_btb (c++ function)": [[2, "_CPPv414initialize_btbv"]], "initialize_replacement (c++ function)": [[2, "_CPPv422initialize_replacementv"]], "last_branch_result (c++ function)": [[2, "_CPPv418last_branch_result8uint64_t8uint64_t7uint8_t7uint8_t"]], "predict_branch (c++ function)": [[2, "_CPPv414predict_branch8uint64_t"], [2, "_CPPv414predict_branch8uint64_t8uint64_tb7uint8_t"]], "prefetcher_branch_operate (c++ function)": [[2, "_CPPv425prefetcher_branch_operate8uint64_t7uint8_t8uint64_t"]], "prefetcher_cache_fill (c++ function)": [[2, "_CPPv421prefetcher_cache_fill8uint64_t8uint32_t10uint32_way7uint8_t8uint32_t"]], "prefetcher_cache_operate (c++ function)": [[2, "_CPPv424prefetcher_cache_operate8uint64_t8uint64_tb7uint8_t8uint32_t"], [2, "_CPPv424prefetcher_cache_operate8uint64_t8uint64_tbb11access_type8uint32_t"], [2, "_CPPv424prefetcher_cache_operate8uint64_t8uint64_tbb7uint8_t8uint32_t"]], "prefetcher_cycle_operate (c++ function)": [[2, "_CPPv424prefetcher_cycle_operatev"]], "prefetcher_final_stats (c++ function)": [[2, "_CPPv422prefetcher_final_statsv"]], "prefetcher_initialize (c++ function)": [[2, "_CPPv421prefetcher_initializev"]], "replacement_final_stats (c++ function)": [[2, "_CPPv423replacement_final_statsv"]], "update_btb (c++ function)": [[2, "_CPPv410update_btb8uint64_t8uint64_t7uint8_t7uint8_t"]], "update_replacement_state (c++ function)": [[2, "_CPPv424update_replacement_state8uint32_t8uint32_t8uint32_t8uint64_t8uint64_t8uint64_t7uint8_t"]]}})