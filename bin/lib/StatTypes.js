class BaseStatType {
	constructor(...args) {
		this.baseStat = args.shift();
		this.__proto__.init.apply(this, args);
	}
}

class ReanimateStat extends BaseStatType {
	init(monsterId, val) {
		this.monsterId = monsterId;
		this.val = val;
	}
}

class ElementalSkillsBonusStat extends BaseStatType {
	init(element, val) {
		this.element = element;
		this.val = val;
	}

}

class ClassSkillsBonusStat extends BaseStatType {
	init(className, val) {
		this.className = className;
		this.val = val;
	}
}

class AuraStat extends BaseStatType {
	init(skill, level) {
		this.skill = skill;
		this.level = level;
	}

}

class SkillBonusStat extends BaseStatType {
	init(skill, value, oSkill) {
		this.skill = skill;
		this.value = value;
	}

}

class ChargedSkillStat extends BaseStatType {
	init(level, skill, charges, maxCharges) {
		this.level = level;
		this.skill = skill;
		this.charges = charges;
		this.maxCharges = maxCharges;
	}
}

class SkillOnEventStat extends BaseStatType {
	init(level, skill, chance) {
		this.level = level;
		this.skill = skill;
		this.chance = chance;
	}

}

class SkillTabBonusStat extends BaseStatType {
	init(tab, charClass, unknown, val) {
		this.tab = tab;
		this.charClass = charClass;
		this.unknown = unknown;
		this.val = val;
	}

}

class PerLevelStat extends BaseStatType {
	init(amount) {
		this.amount = amount / (1 << this.baseStat.OpParam);
	}

}

class MinMaxStat extends BaseStatType {
	init(min, max, frames) {
		this.min = min;
		this.max = max;
		if (frames) this.frames = frames
	}
}

class ColdDamageStat extends MinMaxStat {
}

class PoisonDamageStat extends MinMaxStat {
}

class DamageRangeStat extends MinMaxStat {
}

class ValueStat extends BaseStatType {
	init(val) {
		this.val = val;
	}
}

class ReplenishStat extends ValueStat {

}

class SignedStat extends ValueStat {

}

class UnsignedStat extends ValueStat {

}


module.exports.ReanimateStat = ReanimateStat;
module.exports.ElementalSkillsBonusStat = ElementalSkillsBonusStat;
module.exports.ClassSkillsBonusStat = ClassSkillsBonusStat;
module.exports.AuraStat = AuraStat;
module.exports.SkillBonusStat = SkillBonusStat;
module.exports.ChargedSkillStat = ChargedSkillStat;
module.exports.SkillOnEventStat = SkillOnEventStat;
module.exports.SkillTabBonusStat = SkillTabBonusStat;
module.exports.PerLevelStat = PerLevelStat;
module.exports.ColdDamageStat = ColdDamageStat;
module.exports.PoisonDamageStat = PoisonDamageStat;
module.exports.ReplenishStat = ReplenishStat;
module.exports.SignedStat = SignedStat;
module.exports.UnsignedStat = UnsignedStat;
module.exports.DamageRangeStat = DamageRangeStat;