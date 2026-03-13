<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('lab', function (Blueprint $table) {
            $table->id('lab_id');
            $table->string('lab_name', 100)->unique();
            $table->string('lab_code', 20)->unique();
            $table->text('equipment_list')->nullable();
            $table->integer('capacity')->nullable();
            $table->string('supervisor', 100)->nullable();
            $table->boolean('is_active')->default(true);
            $table->timestamps();

            $table->index('lab_code', 'idx_lab_code');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('lab');
    }
};