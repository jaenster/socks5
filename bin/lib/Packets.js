const BYTE = 'byte', WORD = 'word', DWORD = 'dword', NULLSTRING = 'string';

let tmp = [
	{id: 0x00,},
	{id: 0x01, Difficulty: BYTE, Unknown: WORD, Hardcore: WORD, Expansion: BYTE, Ladder: BYTE,},
	{id: 0x02,},
	{id: 0x03, Act: BYTE, Map_ID: DWORD, Area_Id: WORD, Unknown: DWORD,},
	{id: 0x04,},
	{id: 0x05,},
	{id: 0x06,},
	{id: 0x07, Tile_X: WORD, Tile_Y: WORD, AreaId: BYTE,},
	{id: 0x08, Tile_X: WORD, Tile_Y: WORD, AreaId: BYTE,},
	{id: 0x09, WarpType: BYTE, WarpGid: DWORD, WarpClassId: BYTE, WarpX: WORD, WarpY: WORD,},
	{id: 0x0A, UnitType: BYTE, UnitId: DWORD,},
	{id: 0x0B, UnitType: BYTE, UnitId: DWORD,},
	{id: 0x0C, UnitType: BYTE, UnitId: DWORD, AnimationId: WORD, Life: BYTE,},
	{id: 0x0D, UnitType: BYTE, UnitId: DWORD, Unknown: BYTE, UnitX: WORD, UnitY: WORD, Unknown2: BYTE, Life: BYTE,},
	{id: 0x0E, UnitType: BYTE, UnitGUID: DWORD, PortalFlags: BYTE, FlagIsTargetable: BYTE, UnitState: DWORD,},
	{
		id: 0x0F,
		UnitType: BYTE,
		UnitId: DWORD,  /*0x01 = Walk || 0x23 = Run || 0x20 = Knockback*/
		WalkType: BYTE,
		TargetX: WORD,
		TargetY: WORD,
		null: BYTE,
		CurrentX: WORD,
		CurrentY: WORD,
	},
	{
		id: 0x10,
		UnitType: BYTE,
		UnitId: DWORD,  /*0x02 = Walk || 0x24 = Run*/
		WalkType: BYTE,
		TargetType: BYTE,
		TargetId: DWORD,
		CurrentX: WORD,
		CurrentY: WORD,
	},
	{id: 0x11, UnitType: BYTE, UnitId: DWORD, Unknown: WORD,},
	{id: 0x15, UnitType: BYTE, UnitId: DWORD, X: WORD, Y: WORD, /*0x01 = True || 0x00 = False*/bool: BYTE,},

	// Need to come up with something special
	//{id: 0x16, Unknown: BYTE, Unknown: BYTE, Count: BYTE, ARRAY[Count] (UnitType: BYTE, UnitGid: DWORD,X: WORD,Y: WORD,)},

	{id: 0x17, UnitType: BYTE, UnitGid: DWORD, bUnknown0: BYTE, bUnknown1: BYTE, wUnknown2: WORD, wUnknown3: WORD,},

	// Need to come up with something special
	//{id: 0x18, [BITS[15] HP] [BITS[15] MP] [BITS[15] Stamina] [BITS[7] HPRegen] [BITS[7] MPRegen] [BITS[16] x] [BITS[16] y] [BITS[8] Vx] [ BITS[8] Vy]},

	{id: 0x19, Amount: BYTE,},
	{id: 0x1A, Amount: BYTE,},
	{id: 0x1B, Amount: WORD,},
	{id: 0x1C, Amount: DWORD,},
	{id: 0x1D, Attribute: BYTE, Amount: BYTE,},
	{id: 0x1E, Attribute: BYTE, Amount: WORD,},
	{id: 0x1F, Attribute: BYTE, Amount: DWORD,},
	{id: 0x20, UnitId: DWORD, Attribute: BYTE, Amount: DWORD,},
	{id: 0x21, Unknown: WORD, UnitId: DWORD, Skill: WORD, BaseLevel: BYTE, BonusAmount: BYTE, Unknown2: BYTE,},
	{id: 0x22, Unknown/*(UnitType?)*/: WORD, UnitId: DWORD, Skill: WORD, Amount: BYTE, Unknown2: WORD,},
	{id: 0x23, UnitType: BYTE, UnitGid: DWORD, Hand/*(R=0, L =1)*/: BYTE, Skill: WORD, ItemGid: DWORD,},


	{
		id: 0x26,
		ChatType: BYTE,
		LocaleId: BYTE,
		UnitType: BYTE,
		UnitGid: DWORD,
		ChatColor: BYTE,
		ChatSubType: BYTE,
		Nick: NULLSTRING,
		Message: NULLSTRING,
	},
	// ToDo; make something for arrays
	//{id: 0x27, UnitType: BYTE, UnitId: DWORD,  Count: BYTE, Unknown: BYTE, ARRAY[Count] (Show: BYTE, Unused: BYTE, MessageId: WORD, )},
	//{id: 0x28, UpdateType: BYTE, UnitGid: DWORD, Timer: BYTE, ARRAY[96] (QuestBit: BYTE,)},
	//{id: 0x29, 96: BYTE, QuestBit},

	{id: 0x2A, TradeType: BYTE, Result: BYTE, Unknown: DWORD, NpcGid: DWORD, GoldInInventory: DWORD,},
	{id: 0x2C, UnitType: BYTE, UnitId: DWORD, Sound: WORD,},
	//ToDo; figure out
	//{id: 0x3E, *},
	{id: 0x3F, SellIcon: BYTE, ItemGid: DWORD, SkillId: WORD,},
	{id: 0x40, ItemGid: DWORD, Unknown: DWORD, Unknown2: DWORD,},
	{id: 0x42, UnitType: BYTE, PlayerId: DWORD,},
	{id: 0x47, UnitType: BYTE, Gap: BYTE, UnitId: DWORD, Unused: DWORD,},
	{id: 0x48, UnitType: BYTE, Gap: BYTE, UnitId: DWORD, Unused: DWORD,},
	{id: 0x4C, UnitType: BYTE, UnitId: DWORD, Skill: WORD, Unknown: BYTE, Unknown2: BYTE, TargetId: DWORD, NULL: WORD,},
	{id: 0x4D, UnitType: BYTE, UnitId: DWORD, Skill: DWORD, Unknown: BYTE, X: WORD, Y: WORD, NULL: WORD},
	{id: 0x4E, MercNameString: WORD, Seed: DWORD,},
	{id: 0x4F,},
	{id: 0x50, MessageType: WORD, Argument: WORD[6],},
	{
		id: 0x51,
		ObjectType: BYTE,
		ObjectId: DWORD,
		ObjectCode: WORD,
		X: WORD,
		Y: WORD,
		State: BYTE,
		InteractionType: BYTE,
	},
	// {id: 0x52, 41: BYTE, QuestArray},
	{id: 0x53, ActTBC: DWORD, AngleTBC: DWORD, Darkness: BYTE,},
	{
		id: 0x57,
		MonsterGid: DWORD,
		MonsterType: BYTE,
		MonsterNameIDX: WORD,
		anEnchant1: BYTE,
		anEnchant2: BYTE,
		anEnchant3: BYTE,
		Filler: BYTE,
		MonsterIsChampion: WORD,
	},
	{id: 0x58, UnitGid: DWORD, UIType: BYTE, Bool: BYTE,},
	{id: 0x59, UnitId: DWORD, CharType: BYTE, CharName: NULLSTRING, X: WORD, Y: WORD,},
	{id: 0x5A, MessageType: BYTE, Color: BYTE, Arg: DWORD, ArgTypes: BYTE, Name1: NULLSTRING, NAME2: NULLSTRING,},
	{
		id: 0x5B,
		PacketLength: WORD,
		PlayerId: DWORD,
		CharType: BYTE,
		CharName: NULLSTRING,
		CharLvl: WORD,
		PartyId: WORD,
		NULL: DWORD,
		NULL2: DWORD
	},
	{id: 0x5C, PlayerId: DWORD,},
	{id: 0x5D, QuestId: BYTE, AlertFlags: BYTE, FilterStatus: BYTE, Extra: WORD,},
	//{id: 0x5E, 37: BYTE, Quest]},
	{id: 0x5F, Unknown: DWORD,},
	{id: 0x60, State: BYTE, AreaId: BYTE, UnitId: DWORD,},
	{id: 0x61, Act: BYTE,},
	{id: 0x62, UnitType: BYTE, UnitGid: DWORD, Unused: BYTE,},

	{id: 0x63, WaypointGid: DWORD, SetOrDel: WORD, Waypoint1: DWORD, Waypoint2: DWORD, NULL: DWORD, NULL2: DWORD},
	{id: 0x65, PlayerId: DWORD, Count: WORD,},
	{
		id: 0x67,
		NpcGid: DWORD, /*0x01 = Walk || 0x17 = Run*/
		RunType: BYTE,
		X: WORD,
		Y: WORD,
		Unknown: WORD,
		Unknown2: BYTE,
		Unknown3: WORD,
		Unknown4: BYTE,
	},
	{
		id: 0x68,
		NpcGid: DWORD,
		RunType: BYTE,/*0x00 = Walk || 0x18 = Run*/
		X: WORD,
		Y: WORD,
		TargetUnitType: BYTE,
		TargetId: DWORD,
		Unknown: WORD,
		Unknown2: BYTE,
		Unknown3: WORD,
		Unknown4: BYTE,
	},
	{id: 0x69, NpcGid: DWORD, State: BYTE, X: WORD, Y: WORD, UnitLife: BYTE, Unknown: BYTE,},
	{id: 0x6A, NpcGid: DWORD, Unknown0: BYTE, Unknown1: BYTE, Unknown2: DWORD, Unknown3: BYTE,},
	{id: 0x6B, NpcGid: DWORD, Action: BYTE, NULL: DWORD, NULL2: WORD, X: WORD, Y: WORD,},
	{id: 0x6C, NpcGid: DWORD, AttackType: WORD, TargetId: DWORD, TargetType: BYTE, X: WORD, Y: WORD,},
	{id: 0x6D, NpcGid: DWORD, X: WORD, Y: WORD, UnitLife: BYTE,},
	{
		id: 0x73,
		Unused: DWORD,
		Unknown: WORD,
		Unknown2: DWORD,
		Unknown3: DWORD,
		Unknown4: DWORD,
		Unknown5: DWORD,
		Unknown6: WORD,
		OwnerType: BYTE,
		OwnerGid: DWORD,
		Unknown7: BYTE,
		PierceIdxValue: BYTE,
	},
	{id: 0x74, Assign/*0x00 = False || 0x01 True*/: BYTE, OwnerId: DWORD, CorpseId: DWORD,},
	{
		id: 0x75,
		UnitId: DWORD,
		PartyId: WORD,
		CharLevel: WORD,
		Relationship: WORD,
		InYourParty/*? 0x00 = False || 0x01 = True*/: WORD,
	},
	{id: 0x76, UnitType: BYTE, UnitId: BYTE,},
	{id: 0x77, Action: BYTE,},
	{id: 0x78, CharName: NULLSTRING, UnitId: DWORD,},
	{id: 0x79, GoldOwner: BYTE, Amount: DWORD,},
	{
		id: 0x7A,
		ChangeType: BYTE,/*0x00 = Unsummoned/Lost Sight || 0x01 = Summoned/Assign*/
		Skill: BYTE,
		PetType: WORD,
		OwnerId: DWORD,
		PetId: DWORD,
	},
	{id: 0x7B, Slot: BYTE, Skill: BYTE, /*0x00 = Right || 0x80 = Left*/Type: BYTE, Item: DWORD},
	{id: 0x7C, Type: BYTE, ItemId: DWORD,},
	{id: 0x7D, UnitType: BYTE, UnitGid: DWORD, ItemGid: DWORD, AndValue: DWORD, dwFlagsAfterAnd: DWORD,},
	{id: 0x7E, Unknown: DWORD},
	{id: 0x7F, UnitType: BYTE, UnitLife: WORD, UnitId: DWORD, UnitAreaId: WORD,},
	{id: 0x81, Unknown: BYTE, MercKind: WORD, OwnerId: DWORD, MercId: DWORD, Unknown2: DWORD, Unknown3: DWORD,},
	{id: 0x82, OwnerGid: DWORD, OwnerName: NULLSTRING, PortalGid: DWORD, DestinationId: DWORD,},
	{id: 0x89, EventId: BYTE,},
	{id: 0x8A, UnitType: BYTE, UnitId: DWORD,},
	{id: 0x8B, UnitId: DWORD, /*0x00 = No Party || 0x01 = In Party || 0x02 = Wants to Party*/PartyFlag: BYTE,},
	{id: 0x8C, Player1Id: DWORD, Player2Id: DWORD, RelationState: WORD,},
	{id: 0x8D, PlayerId: DWORD, PartyId: WORD,},
	{id: 0x8E, /*0x00 = Unassign || 0x01 = Assign*/Type: BYTE, OwnerId: DWORD, CorpseId: DWORD,},
	//{id: 0x8F, [BYTES[32] 0x00]},
	{id: 0x90, PlayerId: DWORD, PlayerX: DWORD, PlayerY: DWORD,},
	//{id: 0x91, ACT: BYTE, 12: WORD, Str/NPCId]},
	{id: 0x92, UnitType: BYTE, UnitGid: DWORD,},
	{id: 0x93, PlayerGid: DWORD, signedUnknown: BYTE, Unknown: BYTE, Unknown2: BYTE,},
	//ToDo; deal with arrays
	//{id: 0x94, Count: BYTE, PlayerId: DWORD, ARRAY[Count] ( SkillId: WORD, Level: BYTE, )},
	//{id: 0x95, [BITS[15] HP] [BITS[15] MP] [BITS[15] Stamina] [BITS[7] HPRegen] [BITS[7] MPRegen] [BITS[16] x] [BITS[16] y] [BITS[8] Vx] [ BITS[8] Vy]},
	//{id: 0x96, [BITS[15] Stamina] [BITS[16] x] [BITS[16] y] [BITS[8 Vx] [BITS[8] Vy]},
	{id: 0x97,},
	{id: 0x98, UnitGid: DWORD, Value: WORD,},
	{
		id: 0x99,
		AttackerType: BYTE,
		AttackerGid: DWORD,
		SkillId: WORD,
		SkillLevel: BYTE,
		TargetType: BYTE,
		TargetGid: DWORD,
		Unknown: WORD,
	},
	{
		id: 0x9A,
		AttackerType: BYTE,
		AttackerGid: DWORD,
		SkillId: WORD,
		Unused: WORD,
		SkillLevel: BYTE,
		TargetX: WORD,
		TargetY: WORD,
		Unnown: WORD,
	},
	{id: 0x9B, MercNameId: WORD, ReviveCost: DWORD,},
	//Item's,
	//{id: 0x9C, *},
	//{id: 0x9D, *},

	{id: 0x9E, StatId: BYTE, MercGid: DWORD, NewValue: BYTE,},
	{id: 0x9F, StatId: BYTE, MercGid: DWORD, NewValue: WORD,},
	{id: 0xA0, StatId: BYTE, MercGid: DWORD, NewValue: DWORD,},
	{id: 0xA1, StatId: BYTE, MercGid: DWORD, AddValue: BYTE,},
	{id: 0xA2, StatId: BYTE, MercGid: DWORD, AddValue: WORD,},
	{
		id: 0xA3,
		AuraStat: BYTE,
		SkillId: WORD,
		SkillLevel: WORD,
		UnitType: BYTE,
		UnitGid: DWORD,
		TargetType: BYTE,
		TargetGid: DWORD,
		TargetX: DWORD,
		TargetY: DWORD,
	},
	{id: 0xA4, ClassId: WORD,},
	{id: 0xA5, UnitType: BYTE, UnitGid: DWORD, SkillId: WORD,},
	{id: 0xA6,},
	{id: 0xA7, UnitType: BYTE, UnitId: DWORD, State: BYTE,},
	//ToDo; deal with states
	//{id: 0xA8, UnitType: BYTE, UnitId: DWORD, PacketLength: BYTE, State: BYTE, [VOID State Effects]},
	{id: 0xA9, UnitType: BYTE, UnitId: DWORD, State: BYTE,},
	//ToDo; deal with states
	//{id: 0xAA, UnitType: BYTE, UnitId: DWORD, PacketLength: BYTE, [VOID State Info]},
	{id: 0xAB, UnitType: BYTE, UnitId: DWORD, UnitLife: BYTE,},
	//{id: 0xAC, UnitId: DWORD, UnitCode: WORD,X: WORD,Y: WORD, UnitLife: BYTE, PacketLength: BYTE, [VOID State Info]},
	//{id: 0xAE, LengthNoHeader: WORD, [VOID Data]},
	{id: 0xAF, Compression: BYTE,},
	{id: 0xB0,},
	{id: 0xB2, Unk1: NULLSTRING, Unk2: NULLSTRING, Unk3: NULLSTRING, nClientsCount: WORD, nGameToken: WORD,},
	//{id: 0xB3, ChunkSize: BYTE, FirstPart: BOOL, FullSize: DWORD, ChunkSize2: BYTE, RawBytes},
	{id: 0xB4, Reason: DWORD,},
];

const ServerToClient = {}, ClientToServer = {};


const BitReader = require('./BitReader');
const {changeEndianness} = require('./Util');
tmp.forEach(({id, ...rest}) => {
	ServerToClient[id] = rest;
	if (!ServerToClient[id].hasOwnProperty('fromBuffer')) ServerToClient[id].fromBuffer = buffer => {
		buffer = new BitReader(buffer);
		buffer.bit(8); // First the ID obv
		return Object.entries(ServerToClient[id]).filter(([key]) => key !== 'fromBuffer').reduce((acc, [key, value]) => {
			switch (value) {
				case 'byte':
					acc[key] = buffer.bit(8);
					break;
				case 'word':
					acc[key] = changeEndianness(buffer.bit(16), 2);
					break;
				case 'dword':
					acc[key] = changeEndianness(buffer.bit(16), 4);
					break;
			}
			return acc;
		}, {PacketId: id})
	}
});


module.exports = {
	ServerToClient,
	ClientToServer,
};